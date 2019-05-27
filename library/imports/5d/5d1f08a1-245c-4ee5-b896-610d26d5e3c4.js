"use strict";
cc._RF.push(module, '5d1f0ihJFxO5biWYQ0m1ePE', 'smallStar');
// scripts/smallStar.js

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

cc.Class({
    extends: cc.Component,

    properties: {
        diabolo: null, //空竹
        diaboloComponent: null,
        diaboloEffect: null, //空竹效果属性
        pickUpAudio: {
            default: null,
            type: cc.AudioClip
        } //获得道具音效
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //绑定空竹
        this.diabolo = cc.find("Canvas/diabolo");
        this.diaboloComponent = this.diabolo.getComponent("diabolo");
        this.diaboloEffect = this.diabolo.getComponent("diabolo_effect");
    },


    onCollisionEnter: function onCollisionEnter(other, self) {
        cc.log("变小");
        this.diabolo.scale = 1;
        this.diaboloComponent.rigidbody.gravityScale = 8;
        this.diaboloEffect.small = true;
        this.diaboloEffect.smallOrBigTime = 0;
        cc.audioEngine.playEffect(this.pickUpAudio, false);
        this.node.destroy();
    },

    start: function start() {},
    update: function update(dt) {}
});

cc._RF.pop();