(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/diabolo_effect.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'de9a1H28/BJaZow4BrfRwQc', 'diabolo_effect', __filename);
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
        smallOrBigTime: 0,
        jump: false,
        jumpTime: 0,
        ropesNode: null,
        ropes: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.diabolo = cc.find("Canvas/diabolo");
        this.diaboloComponent = this.diabolo.getComponent("diabolo");
        this.ropesNode = cc.find("Canvas/ropes");
        this.ropes = this.ropesNode.children;
    },
    start: function start() {},
    update: function update(dt) {
        var _this = this;

        //变大和变小效果，不是相互独立的，只能同时存在一种
        if (this.big || this.small) {
            // this.smallOrBigTime++
            // cc.log(this.smallOrBigTime)

            if (this.smallOrBigTime <= 0) {
                //使用次数用完后，变回去
                // cc.log("变回原来大小")
                this.diabolo.scale = 1.5; //变回原来大小
                this.diaboloComponent.rigidbody.gravityScale = 10;
                this.big = false;
                this.small = false;
                this.smallOrBigTime = 5; //可用5次
            }
        }
        //跳跃监控
        if (this.jump) {
            if (this.diaboloComponent.rigidbody.linearVelocity.y < 0) {
                //如果开始往下落，则在下方自动生成一个绳子
                // cc.log("jump")
                for (var i = 0; i < this.ropes.length; i++) {
                    //将空竹以下的绳子都清空
                    if (this.ropes[i].y < this.diabolo.y + 30) {
                        var ropeComponent = this.ropes[i].getComponent('rope');
                        ropeComponent.isDisappear = true;
                    }
                }
                cc.loader.loadRes('rope2.prefab', function (err, resource) {
                    //rope2表示会消失的绳子
                    if (err) {
                        return;
                    }
                    var rope = cc.instantiate(resource); //克隆实例
                    rope.y = _this.diabolo.y - 100; //下方添加绳子
                    rope.x = _this.diabolo.x;
                    _this.node.parent.addChild(rope); //添加绳子
                    _this.scheduleOnce(function () {
                        //定时器，3秒销毁
                        rope.destroy();
                    }, 3);
                });
                this.jump = false;
            }
        }
    }
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
        //# sourceMappingURL=diabolo_effect.js.map
        