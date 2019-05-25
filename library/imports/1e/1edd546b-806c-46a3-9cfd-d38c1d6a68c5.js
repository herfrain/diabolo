"use strict";
cc._RF.push(module, '1edd5RrgGxGo5z904wdamjF', 'random');
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