"use strict";
cc._RF.push(module, '9cce8+hfNNCp4yDN66VRCrA', 'camera');
// scripts/camera.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var random = require('random');
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Node
        },
        labelComponent: null,
        diabolo: {
            default: null,
            type: cc.Node
        }, //空竹对象
        diaboloComponent: null,
        once: true,
        preH: 0, //前一个高度
        heightDifference: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // this.enabled=false
        this.diaboloComponent = this.diabolo.getComponent("diabolo"); //获取组件
    },
    start: function start() {},
    update: function update(dt) {
        // this.node.y++//移动摄像机
        // this.label.y++//标签同时移动

        //其实只要改变画布canvas的位置，就会一直往上运动
        // this.node.parent.y++
        // cc.log(this.node.y)

        // if(this.diabolo.y>this.node.y+this.node.parent.height/2){
        //     this.node.y+=this.diabolo.y-(this.node.y+this.node.parent.height/2)
        // }

        // 如果高度差大于0，即往上运动时，摄像机跟随移动
        if (this.diaboloComponent.y - this.preH > 0) {
            // cc.log(this.diaboloComponent.y)
            var h = this.diaboloComponent.y - this.preH;
            this.preH = this.diaboloComponent.y;
            // cc.log()
            // this.node.y+=this.heightDifference
            //缓动效果
            var moveAction = cc.moveBy(1, cc.v2(0, h)).easing(cc.easeCubicActionOut());
            this.node.runAction(moveAction);
        }
    }
});

cc._RF.pop();