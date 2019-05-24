// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
    },

    start () {
        this.effects=this.node.children
    },

    update (dt) {
        // cc.log(this.effects.length)
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

module.exports = {
    getRandomNum:function() {
        //生成[0,5)的随机整数
        var randNum = parseInt(Math.random()*5);
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
            case 3:
                return 'pen';
            //跳高
            case 4:
                return 'jump';
        }
    }
};
