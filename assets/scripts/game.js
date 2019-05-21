// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.enabled=false
    },

    // //开始游戏
    // gameStart:function(){
    //     this.enabled=true
    //     this.camera.enabled=true
    //     this.startButton.active=false
    // },

    //结束游戏
    gameOver: function () {
        cc.director.loadScene('restart');//重新加载游戏场景
        // this.startButton.active=true
        // this.startButton.x=this.camera.x
    },

    start () {
        
    },

    update (dt) {
        if(!this.diabolo.isValid){//如果空竹消失，则游戏结束
            this.gameOver()
            return
        }
    },
});
