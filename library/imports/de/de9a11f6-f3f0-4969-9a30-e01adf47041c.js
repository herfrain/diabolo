"use strict";
cc._RF.push(module, 'de9a1H28/BJaZow4BrfRwQc', 'diabolo_effect');
// scripts/diabolo_effect.js

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
        diabolo: null,
        diaboloComponent: null,
        big: false,
        small: false,
        smallOrBigTime: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.diabolo = cc.find("Canvas/diabolo");
        this.diaboloComponent = this.diabolo.getComponent("diabolo");
    },
    start: function start() {},
    update: function update(dt) {
        //变大和变小效果，不是相互独立的，只能同时存在一种
        if (this.big || this.small) {
            this.smallOrBigTime++;
            // cc.log(this.smallOrBigTime)
            if (this.smallOrBigTime >= 300) {
                cc.log("变回原来大小");
                this.diabolo.scale = 1.5; //变回原来大小
                this.diaboloComponent.rigidbody.gravityScale = 10;
                this.big = false;
                this.small = false;
                this.smallOrBigTime = 0;
            }
        }
    }
});

cc._RF.pop();