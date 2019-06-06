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
        physicsBoxCollider:null,//物理碰撞
        diabolo:null,//空竹
        diaboloComponent:null,
        diaboloEffect:null,//道具效果
        used:false,//是否使用过
        leftNode:null,//左连接点
        rightNode:null,//右连接点
        leftJoint:null,//左distanceJoint组件
        leftJoint:null,//右distanceJoint组件
        // downToRopeAudio: {
        //     default: null,
        //     type: cc.AudioClip
        // },//落在绳子上音效
        isDisappear:false,//是否逐渐消失
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.diabolo=cc.find("Canvas/diabolo")
        //
        this.physicsBoxCollider=this.node.getComponent(cc.PhysicsBoxCollider)
        //
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        this.diaboloEffect=this.diabolo.getComponent('diabolo_effect')

        this.leftNode=this.node.getChildByName("left")
        this.rightNode=this.node.getChildByName("right")
        //绑定左右distanceJoint组件
        this.leftJoint=this.leftNode.getComponent(cc.DistanceJoint)
        this.rightJoint=this.rightNode.getComponent(cc.DistanceJoint)
        this.physicsBoxCollider.enabled=false
    },

    start () {
        
    },

    //绑定左右节点
    bandLRJoint:function(){
        // cc.log("bandLRJoint")
        //连接
        this.leftJoint.connectedBody=this.diaboloComponent.rigidbody
        this.rightJoint.connectedBody=this.diaboloComponent.rigidbody
        this.leftJoint.enabled=true
        this.rightJoint.enabled=true
        this.leftJoint.apply()//修改之后需要apply()才能真正设置完成
        this.rightJoint.apply()
        //重新设置空竹的属性
        this.diaboloComponent.rope=this.node
        this.diaboloComponent.leftNode=this.leftNode
        this.diaboloComponent.rightNode=this.rightNode
        this.diaboloComponent.leftJoint=this.leftJoint
        this.diaboloComponent.rightJoint=this.rightJoint
        this.diaboloComponent.physicsBoxCollider=this.physicsBoxCollider
    },

    //重新绑定mousejoint
    bandMouseJoint:function(){
        this.diabolo.addComponent(cc.MouseJoint)//添加组件
        this.diaboloComponent.mouseJoint=this.diabolo.getComponent(cc.MouseJoint)
    },

    // onCollisionEnter:function(other,self){
    //     cc.log('enter')
    // },

    //如果检测到与绳子发生碰撞，则建立两边点的链接，并将绑定mousejoint，飞行状态设为false
    //结束碰撞时，如果空竹是往下落的，则添加绳子
    onCollisionExit: function (other, self) {
        // console.log('on collision exit');
        

        if(this.diaboloComponent.rigidbody.linearVelocity.y<0&&this.diaboloComponent.isFly){
            //变大或变小后，需要跳跃两次未跳到过的绳子上才能解除
            if(!this.used){
                // cc.log("使用过")
                if(this.diaboloEffect.big||this.diaboloEffect.small){
                  this.diaboloEffect.smallOrBigTime--
                }
                // cc.log(this.diaboloEffect.smallOrBigTime)
                //设置已使用
                this.used=true
            }
            //绑定左右节点
            this.bandLRJoint()
            //绑定mouseJoint
            this.bandMouseJoint()
            // other.enabled=false
            this.diaboloComponent.isFly=false//固定在绳子上
            //关门
            this.physicsBoxCollider.enabled=true
            // 调用声音引擎播放声音
            // cc.audioEngine.playEffect(this.downToRopeAudio, false);
        }


    },

    // disappear:function(){
    //     this.node.opacity--
    // },

    update (dt) {
        if(this.isDisappear){
            this.node.opacity-=35//透明度减少
            if(this.node.opacity<=0){
                this.node.destroy()
            }
        }

        
    },
});
