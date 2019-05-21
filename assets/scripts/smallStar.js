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
        diabolo:null,//空竹
        diaboloComponent:null,
        diaboloEffect:null,//空竹效果属性
        // isEffect:false,//是否生效
        // time:0,//计时
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //绑定空竹
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        this.diaboloEffect=this.diabolo.getComponent("diabolo_effect")

    },

    onCollisionEnter: function (other, self) {
        cc.log("变小")
        this.diabolo.scale=1
        this.diaboloComponent.rigidbody.gravityScale=5
        this.diaboloEffect.small=true
        this.diaboloEffect.smallOrBigTime=0
        //让节点变透明，且不再碰撞，但是仍能运作update
        // this.node.opacity=0
        // this.node.getComponent(cc.CircleCollider).enabled=false
        //销毁节点
        this.node.destroy()
    },

    start () {

    },

    update (dt) {
        
    },
});
