"use strict";
cc._RF.push(module, '1edd5RrgGxGo5z904wdamjF', 'random');
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