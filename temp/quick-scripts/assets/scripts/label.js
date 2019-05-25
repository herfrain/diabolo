(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/label.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f2960WD5L1L36OIEK+w+6tN', 'label', __filename);
// scripts/label.js

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
        height: 0, //高度
        preH: 0, //前一个绳子的高度
        heightDifference: 0, //每次的高度差
        once: true, //限制只变化一次
        label: null,
        diabolo: {
            default: null,
            type: cc.Node
        }, //空竹对象
        diaboloComponent: null, //空竹组件
        camera: {
            default: null,
            type: cc.Node
        },
        cameraComponent: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.diaboloComponent = this.diabolo.getComponent("diabolo"); //获取组件
        this.label = this.node.getComponent(cc.Label); //获取label组件
        this.label.string = 0;
        this.cameraComponent = this.camera.getComponent("camera");
    },
    start: function start() {
        this.preH = this.diaboloComponent.rope.convertToWorldSpaceAR(cc.v2(0, 0)).y;
    },
    update: function update(dt) {
        //当空竹调到一条rope上时，记录高度差，加入高度统计
        if (!this.diaboloComponent.isFly && this.once) {
            //只进入一次
            this.once = false;
            var h = this.diaboloComponent.rope.convertToWorldSpaceAR(cc.v2(0, 0)).y - this.preH; //高度差，这个绳子高度-之前绳子的高度
            this.cameraComponent.heightDifference = h; //设置camera里的高度差属性
            // this.node.y+=h//label的高度也要对应改变
            this.height += h; //把高度差相加
            this.preH = this.diaboloComponent.rope.convertToWorldSpaceAR(cc.v2(0, 0)).y; //这个绳子变为前一个绳子
            // this.label.string=parseInt(this.height)+"m"//更改label的string显示
            cc.log("height:" + this.height);
        } else if (this.diaboloComponent.isFly && !this.once) {
            //飞行时，将once改回来
            this.once = true;
        }
        var labelHeight = parseInt(this.label.string);
        if (labelHeight < this.height) {
            labelHeight += 11;
            this.label.string = parseInt(labelHeight) + "m";
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
        //# sourceMappingURL=label.js.map
        