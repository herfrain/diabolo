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
cc.Class({
    extends: cc.Component,

    properties: {
        label:{
            default:null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.enabled=false
    },

    start () {

    },

    update (dt) {
        // this.node.y++//移动摄像机
        // this.label.y++//标签同时移动

        //其实只要改变画布canvas的位置，就会一直往上运动
        // this.node.parent.y++
    },
});
