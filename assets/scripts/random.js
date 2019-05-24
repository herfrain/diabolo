module.exports = {
    m:150,
    getRndInteger:function(min, max) {
        if(Math.random()<0.5){//左边
            return Math.floor(Math.random() * (-this.m - min + 1) ) + min;
        }else{
            return Math.floor(Math.random() * (max - this.m + 1) ) + this.m;
        }
    },
    
    getRndIntegerUp:function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    newRndItem:function() {
        var rand = Math.random * 10;
        if(rand > 7) {
            console.log("决定是否生成道具的随机数：" + rand);
            return true;
        }
        else {
            return false;
        }
    },
};
