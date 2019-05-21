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
        x:0,//x坐标
        y:0,//y坐标
        x_speed:0,//x轴方向速度
        y_speed:0,//y轴方向速度
        isFly:false,//是否正在飞行中
        rigidbody:null,//刚体
        mouseJoint:null,
        ropes:{
            default:null,
            type:cc.Node
        },//关联rope的父节点，可以通过这个父节点访问子节点
        rope:null,//空竹所在的绳子
        physicsBoxCollider:null,//物理墙
        leftNode:null,//左连接点
        rightNode:null,//右连接点
        leftJoint:null,//左distanceJoint组件
        leftJoint:null,//右distanceJoint组件
        camera:null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //注册Touch事件
        // this.node.on(cc.Node.EventType.TOUCH_START,this.touchBegin,this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);//当手指在目标节点区域内离开屏幕时
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);//当手指在目标节点区域外离开屏幕时

        //绑定刚体
        this.rigidbody = this.node.getComponent(cc.RigidBody);
        //绑定左右连接点
        var ropeList=this.ropes.children;
        this.rope=ropeList[0]
        this.leftNode=this.rope.getChildByName("left")
        this.rightNode=this.rope.getChildByName("right")
        //绑定左右distanceJoint组件
        this.leftJoint=this.leftNode.getComponent(cc.DistanceJoint)
        this.rightJoint=this.rightNode.getComponent(cc.DistanceJoint)
        // this.leftJoint.connectedBody=this.rigidbody
        // this.rightJoint.connectedBody=this.rigidbody
        //绑定mouseJoint
        this.mouseJoint=this.node.getComponent(cc.MouseJoint)
        //绑定物理碰撞
        this.physicsBoxCollider=this.rope.getComponent(cc.PhysicsBoxCollider)
        
        //
        this.camera=cc.find("Canvas/Main Camera")
        cc.log(this.rope)
        cc.log(this.physicsBoxCollider)
        cc.log("scale:"+this.node.scale)
    },

    start () {
        this.physicsBoxCollider.enabled=true
    },

    touchBegin:function(event){
        console.info("begin")
       
    },

    touchMove:function(event){
        console.info("move")
        //如果空竹比绳子高，则不能往上拉动
    },

    /**
     * 放手后，与当前左右连接点解绑
     * 空竹沿着两边固定点的中心方向射出
     * 初速度与拉伸程度有关
     * @param {*} event 
     */

    //计算速度向量
    calV2:function(){
        // var biabolo_v2=this.rigidbody.getWorldVector();
        // var rope_v2=this.rope.getWorldVector();
        var k=5.5//系数，可调
        // var f1=this.leftJoint.getReactionForce(1)//获取反作用力
        // var f2=this.rightJoint.getReactionForce(1)
        var leftnode_wp=this.leftNode.convertToWorldSpaceAR(cc.v2(0,0))//左节点的世界坐标向量
        var rightnode_wp=this.rightNode.convertToWorldSpaceAR(cc.v2(0,0))
        var diabolo_wp=this.node.convertToWorldSpaceAR(cc.v2(0,0))
        var f1=leftnode_wp.sub(diabolo_wp)//左上拉力向量
        var f2=rightnode_wp.sub(diabolo_wp)
        var result_v2=f1.add(f2)
        result_v2=result_v2.scale(cc.v2(k,k))//乘一个系数，放大作用力
        cc.log(f1)
        cc.log(f2)
        cc.log(result_v2)
        return result_v2
    },

    touchEnd:function(event){
        console.info("end")

        if(!this.isFly){
            //给个初速度向量，相当于射出去
            this.rigidbody.linearVelocity=this.calV2()
            //删除两端连接点
            this.cancelLRJoint()
            //删除拉动点mouseJoint
            this.mouseJoint.destroy()
            this.mouseJoint=null
            //设置为飞行状态
            this.isFly=true
            //开门
            this.physicsBoxCollider.enabled=false
        }
        // this.bandMouseJoint()
        // cc.log(this.mouseJoint)
    },

    //取消左右节点绑定
    cancelLRJoint:function(){
        // this.rope=null
        this.leftJoint.enabled=false
        this.leftJoint.connectedBody=null
        this.rightJoint.enabled=false
        this.rightJoint.connectedBody=null
        this.leftJoint.apply()
        this.rightJoint.apply()
    },

    

    update (dt) {

        if(this.node.isValid){
            if(this.node.y<this.camera.y-this.camera.parent.height/2){
                this.node.destroy()
            }
        }
        
    },
});
