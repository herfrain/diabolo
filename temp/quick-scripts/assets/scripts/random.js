(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/random.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1edd5RrgGxGo5z904wdamjF', 'random', __filename);
// scripts/random.js

"use strict";

module.exports = {
    //随机整数[min,max]
    getRndIntegerUp: function getRndIntegerUp(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    newRndItem: function newRndItem() {
        var rand = Math.random * 10;
        if (rand > 7) {
            console.log("决定是否生成道具的随机数：" + rand);
            return true;
        } else {
            return false;
        }
    }
};

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
        //# sourceMappingURL=random.js.map
        