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
        gameOverAudio: {
            default: null,
            type: cc.AudioClip
        },//死亡音效
        infoes:{
            default: null,
            type: cc.Node
        },//道具图
        once:true,//控制只加载一次restart场景
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.enabled=false
        // cc.game.addPersistRootNode(this.label)
        this.infoes.active=false
        var firstGame=cc.sys.localStorage.getItem("firstGame")
        // console.info(firstGame)//微信小程序上显示是空
        // console.info(firstGame=="")
        // console.info(firstGame==null)
        if(firstGame==""||firstGame==null){//如果是第一次玩
            cc.sys.localStorage.setItem("firstGame", "false");
            this.infoes.active=true//显示道具图
            // console.info("showInfo")
        }
    },

    //隐藏道具图
    hideInfo:function(){
        this.infoes.active=false
        cc.log("hide")
    },

    //结束游戏
    gameOver: function () {
        // cc.log("game over")
        cc.audioEngine.playEffect(this.gameOverAudio, false);
        cc.director.loadScene('restart');//重新加载游戏场景
    },

    start () {
    },

    update (dt) {
        if(!this.diabolo.isValid&&this.once){//如果空竹消失，则游戏结束
            // cc.log(this.diabolo.isValid)
            this.gameOver()
            this.once=false
            // this.node.destroy()
        } 
        
    },
});
