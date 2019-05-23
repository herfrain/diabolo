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
        height:0,
        preH:0,
        camera:null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //绑定空竹
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        this.diaboloEffect=this.diabolo.getComponent("diabolo_effect")
        this.camera=cc.find("Canvas/Main Camera")
        this.height=10000
    },

    onCollisionEnter: function (other, self) {
        cc.log("弹跳")
        this.diaboloEffect.jump=true
        // this.diaboloEffect.jumpTime=12
        // this.preH=this.diabolo.y
        // this.diaboloComponent.rigidbody.linearVelocity=cc.v2(0,0)
        // var moveAction=cc.moveBy(10,cc.v2(0,this.height)).easing(cc.easeCubicActionOut())
        // this.diabolo.getComponent(cc.CircleCollider).enabled=false
        // this.diaboloComponent.rigidbody.type=cc.RigidBodyType.Static
        // this.diabolo.runAction(cc.sequence(moveAction,cc.callFunc(this.callBack(this.diabolo,this.diaboloComponent,this.node))))
        this.diaboloComponent.rigidbody.linearVelocity=cc.v2(0,this.height)//给一个大的向上的初速度
        
        this.node.destroy()
    },

    // callBack:function(diabolo,diaboloComponent,node){
    //     cc.log("弹跳完毕")
    //     diabolo.getComponent(cc.CircleCollider).enabled=true
    //     diaboloComponent.rigidbody.type=cc.RigidBodyType.Dynamic
    //     node.destroy()
    // },

    start () {

    },

    update (dt) {
        
    },
});
