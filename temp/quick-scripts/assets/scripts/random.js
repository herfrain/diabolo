(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/random.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1edd5RrgGxGo5z904wdamjF', 'random', __filename);
// scripts/random.js

"use strict";

module.exports = {
    m: 150,
    getRndInteger: function getRndInteger(min, max) {
        if (Math.random() < 0.5) {
            //左边
            return Math.floor(Math.random() * (-this.m - min + 1)) + min;
        } else {
            return Math.floor(Math.random() * (max - this.m + 1)) + this.m;
        }
    },

    getRndIntegerUp: function getRndIntegerUp(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
        