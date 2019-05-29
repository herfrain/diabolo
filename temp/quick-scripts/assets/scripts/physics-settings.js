(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/physics-settings.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f84f40WhtVFvZ7kQfcBYFPZ', 'physics-settings', __filename);
// scripts/physics-settings.js

"use strict";

cc.game.on(cc.game.EVENT_ENGINE_INITED, function () {
    //开启物理系统
    var physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
    // physicsManager.gravity = cc.v2(0, -400);//重力加速度，每秒下降多少像素
    // physicsManager.debugDrawFlags = 
    //     // 0;
    //     // cc.PhysicsManager.DrawBits.e_aabbBit |
    //     cc.PhysicsManager.DrawBits.e_jointBit |
    //     cc.PhysicsManager.DrawBits.e_shapeBit
    // ;

    //开启碰撞检测
    var collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true;
    // collisionManager.enabledDebugDraw=true;
    // collisionManager.enabledDrawBoundingBox = true;
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
        //# sourceMappingURL=physics-settings.js.map
        