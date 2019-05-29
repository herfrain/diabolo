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
        graphics:null,
        once:true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.graphics = this.getComponent(cc.Graphics);
    },

    start () {
        this.schedule(function(){
            if(this.once){
                // this.graphics.clear()
                this.graphics.strokeColor.fromHEX('#FFFFFF')
                this.once=false
            }else{
                // this.graphics.clear()
                this.graphics.strokeColor.fromHEX('#FF3C3C')
                this.once=true
            }
        },0.5)
    },

    update (dt) {
        
    },
});
