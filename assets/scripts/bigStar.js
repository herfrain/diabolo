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

    //检测碰撞（刚进入时
    onCollisionEnter: function (other, self) {
        cc.log("变大")
        this.diabolo.scale=2
        this.diaboloComponent.rigidbody.gravityScale=15
        this.diaboloEffect.big=true
        this.diaboloEffect.smallOrBigTime=0
        //让节点变透明，且不再碰撞，但是仍能运作update
        // this.node.opacity=0
        // this.node.getComponent(cc.CircleCollider).enabled=false
        //直接销毁节点
        this.node.destroy()
    },

    start () {

    },

    update (dt) {
        
        
    },
});
