(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/bigStar.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f6dae2emy5NwJf+XzhTLhEN', 'bigStar', __filename);
// scripts/bigStar.js

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
        diaboloEffect: null //空竹效果属性
        // isEffect:false,//是否生效
        // time:0,//计时
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //绑定空竹
        this.diabolo = cc.find("Canvas/diabolo");
        this.diaboloComponent = this.diabolo.getComponent("diabolo");
        this.diaboloEffect = this.diabolo.getComponent("diabolo_effect");
    },


    //检测碰撞（刚进入时
    onCollisionEnter: function onCollisionEnter(other, self) {
        cc.log("变大");
        this.diabolo.scale = 2; //大小比例
        this.diaboloComponent.rigidbody.gravityScale = 15; //重力
        this.diaboloEffect.big = true; //效果赋值
        this.diaboloEffect.smallOrBigTime = 0; //从0开始计时
        //让节点变透明，且不再碰撞，但是仍能运作update
        // this.node.opacity=0
        // this.node.getComponent(cc.CircleCollider).enabled=false
        //直接销毁节点
        this.node.destroy();
    },

    start: function start() {},
    update: function update(dt) {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=bigStar.js.map
        