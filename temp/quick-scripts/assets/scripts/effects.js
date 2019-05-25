(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/effects.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '77cebhi1zdKqY8ghHi+NGRb', 'effects', __filename);
// scripts/effects.js

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
        effects: null,
        camera: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.camera = cc.find("Canvas/Main Camera");
    },
    start: function start() {
        this.effects = this.node.children;
    },
    update: function update(dt) {
        // cc.log(this.effects.length)
        //遍历子节点，如果出界则销毁
        for (var i = 0; i < this.effects.length; i++) {
            if (this.effects[i].isValid) {
                if (this.effects[i].y < this.camera.y - this.camera.parent.height / 2) {
                    this.effects[i].destroy();
                }
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
        //# sourceMappingURL=effects.js.map
        