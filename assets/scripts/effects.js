// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var random=require('random')
var ItemType = 
{
    //没有东西
    IT_None:0,
    //变大
    IT_BigStar:1,
    //变小
    IT_SmallStar:2,
    //画辅助线
    IT_Pen:3,
    //跳高
    IT_Jump:4,
};

var effects = cc.Class({
    extends: cc.Component,

    properties: {
        effects:null,
        camera:null,
        ropes:null,
        ropesNode:null,

        //拾取距离
        pickRadius:0,

       //物品Prefab列表
       ItemPrefabList:
       {
           default: [],  
           type: [cc.Prefab],
       },

       //概率列表
       ItemRateList:
       {
           default:[],
           type: [cc.Integer],                    
       },

       //随机的基数
       _RandBaseNum : 100,
       _RandRateList: [],
       //物品池
       _ItemPoolList: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.camera=cc.find("Canvas/Main Camera")
        this.ropesNode=cc.find("Canvas/ropes")
    },

    getRandomNum:function() {
        //生成[0,5)的随机整数
        var randNum = parseInt(Math.random()*5)+1;
        return randNum;
    },

    getItem:function(randomNum) {
        switch(randomNum) {
            //没有东西
            case 0:
                return null;
            //变大
            case 1:
                return 'star_big';
            //变小
            case 2:
                return 'star_small';
            //画辅助线
            // case 3:
            //     return 'pen';
            //跳高
            case 3:
                return 'jump';
            //上树
            case 4:
                return 'fly';
            case 5:
                return 'lantern_scoreUp'
        }
    },

    createEffect:function(){
        if(this.effects.length>6){
            return
        }
        var effectsNode=this.node
        var randNum = this.getRandomNum();
        //获得本次随机生成的道具
        var item = this.getItem(randNum);
        //随机某一根绳子
        var randRope = 0
        if(this.ropes.length-5>=0)
            randRope = random.getRndIntegerUp(this.ropes.length-5,this.ropes.length-1);
        //该绳子位置
        var ropeX = this.ropes[randRope].x;
        var ropeY = this.ropes[randRope].y;
        //加载道具
        cc.loader.loadRes(item, function(err, prefab) {
            var newNode = cc.instantiate(prefab);
            console.log("生成道具");
            // newNode.parent = effectsNode;//不知道为何，有时会是null？？？
            // cc.log(ropeX)
            newNode.x = ropeX+random.getRndIntegerUp(-80,80);
            newNode.y = ropeY+random.getRndIntegerUp(-200,200);
            effectsNode.addChild(newNode)
            // cc.log("道具数量："+effectsNode.children.length)
        });
    },

    start () {
        this.effects=this.node.children
        this.ropes=this.ropesNode.children
        this.schedule(this.createEffect, (Math.random()*10)+10 );
    },

    update (dt) {
        // cc.log(this.effects.length)
        // cc.log(this.camera.y+this.camera.parent.height>this.ropes[this.ropes.length-1].y)
        // if(this.camera.y+this.camera.parent.height>this.ropes[this.ropes.length-1].y){
        //     var num=random.getRndIntegerUp(0,2)
        //     for(var i=0;i<num;i++){
        //         cc.log("lll")
        //         this.createEffect()
        //     }
        // }

        //遍历子节点，如果出界则销毁
        for(var i=0;i<this.effects.length;i++){
            if(this.effects[i].isValid){
                if(this.effects[i].y<this.camera.y-this.camera.parent.height/2){
                    this.effects[i].destroy()
                }
            }
        }
    },

    

    
});