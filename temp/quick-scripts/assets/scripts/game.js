(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6a4d0yjitpCCJ++b/TO9xVO', 'game', __filename);
// scripts/game.js

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

var effects = require("effects");

cc.Class({
    extends: cc.Component,

    properties: {
        diabolo: {
            default: null,
            type: cc.Node
        },
        camera: {
            default: null,
            type: cc.Node
        },
        effect: {
            default: null,
            type: cc.Prefab
            // effect:effects.effects,
        } },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // this.enabled=false


    },


    // //开始游戏
    // gameStart:function(){
    //     this.enabled=true
    //     this.camera.enabled=true
    //     this.startButton.active=false
    // },

    //结束游戏
    gameOver: function gameOver() {
        cc.director.loadScene('restart'); //重新加载游戏场景
        // this.startButton.active=true
        // this.startButton.x=this.camera.x
    },

    start: function start() {
        // console.log("开始计时");
        // this.schedule(function() {
        //     console.log("进入计时函数");
        //     var randNum = effects.getRandomNum();

        //     var item = effects.getItem(randNum);
        //     cc.loader.loadRes(item, function(err, prefab) {
        //         var newNode = cc.instantiate(prefab);
        //         console.log("生成道具");
        //         newNode.parent = cc.director.getScene();
        //         newNode.x = Math.random()*700;
        //         newNode.y = Math.random()*700;
        //         // cc.director.getScene().addChild(newNode);

        //     });
        // }, (Math.random()*30)+30 );
    },
    update: function update(dt) {
        if (!this.diabolo.isValid) {
            //如果空竹消失，则游戏结束
            // cc.log(this.diabolo.isValid)
            this.gameOver();
            return;
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
        //# sourceMappingURL=game.js.map
        