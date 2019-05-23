"use strict";
cc._RF.push(module, 'd2524x00NRMRb6YtPKczGwB', 'backgrounds');
// scripts/backgrounds.js

'use strict';

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
        backgrounds: null,
        camera: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.backgrounds = this.node.children;
    },
    start: function start() {},
    update: function update(dt) {
        var _this = this;

        if (this.camera.y + this.camera.parent.height > this.backgrounds[this.backgrounds.length - 1].y) {

            // //加载prefab预制资源
            cc.loader.loadRes('background.prefab', function (err, resource) {
                if (err) {
                    return;
                }
                var bg = cc.instantiate(resource); //克隆实例
                var preBg = _this.backgrounds[_this.backgrounds.length - 1];
                bg.y = preBg.y + preBg.height; //从最后一个背景的上面
                bg.x = 0;
                _this.node.addChild(bg); //添加背景
            });
            cc.loader.loadRes('background2.prefab', function (err, resource) {
                if (err) {
                    return;
                }
                var bg = cc.instantiate(resource); //克隆实例
                var preBg = _this.backgrounds[_this.backgrounds.length - 1];
                bg.y = preBg.y + preBg.height; //从最后一个背景的上面
                bg.x = 0;
                _this.node.addChild(bg); //添加背景
            });
        }
        // cc.log(this.backgrounds.length)
        for (var i = 0; i < this.backgrounds.length; i++) {
            if (this.backgrounds[i].isValid) {
                if (this.backgrounds[i].y + this.backgrounds[i].height / 2 < this.camera.y - this.camera.parent.height / 2) {
                    //低于摄像机下边界
                    // cc.log(2)
                    this.backgrounds[i].destroy();
                }
            }
        }
    }
});

cc._RF.pop();