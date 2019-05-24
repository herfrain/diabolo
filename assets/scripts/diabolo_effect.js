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
        diabolo:null,
        diaboloComponent:null,
        big:false,
        small:false,
        smallOrBigTime:0,
        jump:false,
        jumpTime:0,
        ropes:{
            default:null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
    },

    start () {

    },

    update (dt) {
        //变大和变小效果，不是相互独立的，只能同时存在一种
        if(this.big||this.small){
            this.smallOrBigTime++
            // cc.log(this.smallOrBigTime)
            if(this.smallOrBigTime>=300){
                cc.log("变回原来大小")
                this.diabolo.scale=1.5//变回原来大小
                this.diaboloComponent.rigidbody.gravityScale=10
                this.big=false
                this.small=false
                this.smallOrBigTime=0
            }
        }
        //跳跃监控
        if(this.jump){
            if(this.diaboloComponent.rigidbody.linearVelocity.y<0){//如果开始往下落，则在下方自动生成一个绳子
                cc.log("jump")
                cc.loader.loadRes('rope.prefab', (err, resource)=>{
                    if(err){ return; }
                    var rope=cc.instantiate(resource)//克隆实例
                    rope.y=this.diabolo.y-200//下方添加绳子
                    rope.x=this.diabolo.x
                    this.node.parent.addChild(rope)//添加绳子
                    this.scheduleOnce(function(){//定时器，3秒销毁
                        rope.destroy()
                    },3)
                });
                this.jump=false
            }
        }
    },
});
