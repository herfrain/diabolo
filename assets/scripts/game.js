// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var effects = require("effects")

cc.Class({
    extends: cc.Component,

    properties: {
        diabolo:{
            default:null,
            type:cc.Node
        },
        camera:{
            default:null,
            type:cc.Node
        },
        label:{
            default:null,
            type:cc.Node
        },
        // effect:effects.effects,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.enabled=false
        cc.game.addPersistRootNode(this.label)
        
    },

    // //开始游戏
    // gameStart:function(){
    //     this.enabled=true
    //     this.camera.enabled=true
    //     this.startButton.active=false
    // },

    //结束游戏
    gameOver: function () {
        cc.log("game over")
        cc.director.loadScene('restart');//重新加载游戏场景
        // this.startButton.active=true
        // this.startButton.x=this.camera.x
    },

    start () {
        // console.log("开始计时");
        // this.schedule(function() {
        //     console.log("进入计时函数");
        //     var randNum = effects.getRandomNum();
            
        //     var item = effects.getItem(randNum);
        //     cc.loader.loadRes(item, function(err, prefab) {
        //         var newNode = cc.instantiate(prefab);
        //         console.log("生成道具");
        //         newNode.parent = cc.director.getScene();
        //         newNode.x = Math.random()*700;
        //         newNode.y = Math.random()*700;
        //         // cc.director.getScene().addChild(newNode);

        //     });
        // }, (Math.random()*30)+30 );
    },

    update (dt) {
        if(!this.diabolo.isValid){//如果空竹消失，则游戏结束
            // cc.log(this.diabolo.isValid)
            this.gameOver()
            return
        } 
        
    },

    update (dt) {
        if(!this.diabolo.isValid){//如果空竹消失，则游戏结束
            // cc.log(this.diabolo.isValid)
            this.gameOver()
            return
        }
    },
});
