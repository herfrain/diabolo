// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var sc=require('score')
cc.Class({
    extends: cc.Component,

    properties: {
        bestScore:{
            default:null,
            type:cc.Label
        },//最好记录
        nowScore:{
            default:null,
            type:cc.Label
        },//本次记录
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // console.info(sc.score)
        // cc.sys.localStorage.setItem("score", 0)
        // console.info("bestScore:"+cc.sys.localStorage.getItem("score"))
        var s = cc.sys.localStorage.getItem("score")
        var n = ""
        if(s==""||s==null||(parseInt(s) < parseInt(sc.score))){
            // console.info("空")
            cc.sys.localStorage.setItem("score", sc.score);
            s=sc.score
            n = " NEW !"
        }
        this.bestScore.string=s
        this.nowScore.string=sc.score+n
    },

    // update (dt) {},
});
