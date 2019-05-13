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
        used:false,//是否使用过
        camera:null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.diabolo=cc.find("Canvas/diabolo")
        //
        this.physicsBoxCollider=this.node.getComponent(cc.PhysicsBoxCollider)
        //
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        this.camera=cc.find("Canvas/Main Camera")
    },

    start () {
        
    },

    update (dt) {
        //如果空竹在上面，则开门
        //空竹弹出后，开门
        //其他情况，关门
        //cc.log(this.diabolo.isFly)
        //if(this.on)
        // cc.log(this.node.isValid)
        if(this.node.isValid){//如果还存在
            if(this.node.y<this.diabolo.y&&this.physicsBoxCollider.enabled&&this.diaboloComponent.isFly){
                //cc.log(1)
                this.physicsBoxCollider.enabled=false
            }else if(!this.diaboloComponent.isFly&&!this.physicsBoxCollider.enabled){
                this.physicsBoxCollider.enabled=true
            }
            if(this.node.y<this.camera.y-this.camera.parent.height/2){//低于摄像机下边界
                // cc.log(2)
                this.node.destroy()
            }
        }
        
    },
});
