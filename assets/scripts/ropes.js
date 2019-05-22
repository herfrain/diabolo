// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


//ropes 绳子组
//功能：自动随机生成下一跳的绳子
var random=require('random')
cc.Class({
    extends: cc.Component,

    properties: {
        ropes:null,
        diabolo:null,
        diaboloComponent:null,
        camera:{
            default:null,
            type:cc.Node
        },
    },

    // // LIFE-CYCLE CALLBACKS:
    // getRndInteger:function(min, max) {
    //     if(Math.random()<0.5){//左边
    //         return Math.floor(Math.random() * (-this.m - min + 1) ) + min;
    //     }else{
    //         return Math.floor(Math.random() * (max - this.m + 1) ) + this.m;
    //     }
    // },

    // getRndIntegerUp:function(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) ) + min;
    // },

    onLoad () {
        // this.enabled=false
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        var ropeList=this.node.children
        var firstrope=ropeList[0]
        var prerope=firstrope
        for(var i=0;i<10;i++){
            var nextrope=cc.instantiate(prerope)
            // cc.log(random.getRndIntegerUp(-300,300))
            nextrope.y=prerope.y+random.getRndIntegerUp(100,200)
            nextrope.x=random.getRndIntegerUp(-this.camera.parent.width/2+100,this.camera.parent.width/2-100)
            // cc.log("prerope:"+prerope.x)
            prerope=nextrope
            this.node.addChild(nextrope)
        }
        var leftNode=firstrope.getChildByName("left")
        var rightNode=firstrope.getChildByName("right")
        //绑定左右distanceJoint组件
        var leftJoint=leftNode.getComponent(cc.DistanceJoint)
        var rightJoint=rightNode.getComponent(cc.DistanceJoint)
        leftJoint.connectedBody=this.diaboloComponent.rigidbody
        rightJoint.connectedBody=this.diaboloComponent.rigidbody
        cc.log(firstrope)
    },

    start () {
        this.ropes=this.node.children
    },

    update (dt) {
        //在摄像机顶部添加绳子
        // if(Math.abs(this.camera.y)%200==0)
        // if(this.camera.y+this.camera.parent.height>this.ropes[this.ropes.length-1].y)
        if(this.camera.y+this.camera.parent.height>this.ropes[this.ropes.length-1].y){
            var prerope=this.ropes[this.ropes.length-1]
            for(var i=0;i<10;i++){
                var nextrope=cc.instantiate(prerope)
                // cc.log(random.getRndIntegerUp(-300,300))
                nextrope.y=prerope.y+random.getRndIntegerUp(100,200)
                nextrope.x=random.getRndIntegerUp(-this.camera.parent.width/2+100,this.camera.parent.width/2-100)
                // cc.log("prerope:"+prerope.x)
                prerope=nextrope
                this.node.addChild(nextrope)
            }
            // //加载prefab预制资源
            // cc.loader.loadRes('rope.prefab', (err, resource)=>{
            //     if(err){ return; }
            //     // var rope=cc.instantiate(resource)//克隆实例
            //     // rope.y=this.camera.y+this.camera.parent.height/2+random.getRndIntegerUp(0,50)//从摄像机顶部开始
            //     // rope.x=random.getRndIntegerUp(-this.camera.parent.width/2+100,this.camera.parent.width/2-100)
            //     // this.node.addChild(rope)//添加绳子
                
            // });
        }
        // cc.log(this.ropes.length)
        for(var i=0;i<this.ropes.length;i++){
            if(this.ropes[i].isValid){
                if(this.ropes[i].y<this.camera.y-this.camera.parent.height/2){//低于摄像机下边界
                    // cc.log(2)
                    this.ropes[i].destroy()
                }
            }
        }
    },
});
