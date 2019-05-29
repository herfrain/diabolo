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
        label:null,
        labelComponent:null,
        pickUpAudio: {
            default: null,
            type: cc.AudioClip
        },//获得道具音效
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.label=cc.find("Canvas/Main Camera/label")
        this.labelComponent=this.label.getComponent('label')
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
    },

    //检测碰撞（刚进入时
    onCollisionEnter: function (other, self) {
        if(this.diaboloComponent.isFly){
            cc.log("加分")
            this.labelComponent.height+=2000
            cc.audioEngine.playEffect(this.pickUpAudio, false);
            this.node.destroy()
        }
    },

    start () {

    },

    // update (dt) {},
});
