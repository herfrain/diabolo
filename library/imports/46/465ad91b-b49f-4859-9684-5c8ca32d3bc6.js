"use strict";
cc._RF.push(module, '465adkbtJ9IWZaEXIyjLTvG', 'rope');
// scripts/rope.js

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
        physicsBoxCollider: null, //物理碰撞
        diabolo: {
            default: null,
            type: cc.Node
        }, //空竹
        diaboloComponent: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //
        this.physicsBoxCollider = this.node.getComponent(cc.PhysicsBoxCollider);
        //
        this.diaboloComponent = this.diabolo.getComponent("diabolo");
    },
    start: function start() {},
    update: function update(dt) {
        //如果空竹在上面，则开门
        //空竹弹出后，开门
        //其他情况，关门
        //cc.log(this.diabolo.isFly)
        if (this.node.y < this.diabolo.y && this.physicsBoxCollider.enabled) {
            //cc.log(1)
            this.physicsBoxCollider.enabled = false;
        } else if (this.node.y > this.diabolo.y && !this.diaboloComponent.isFly) {
            //cc.log(3)
            this.physicsBoxCollider.enabled = true;
        }
    }
});

cc._RF.pop();