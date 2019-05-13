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
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        var ropeList=this.node.children
        var firstrope=ropeList[0]
        // var prerope=firstrope
        // for(var i=0;i<10;i++){
        //     var nextrope=cc.instantiate(prerope)
        //     // cc.log(random.getRndIntegerUp(-300,300))
        //     nextrope.y=prerope.y+random.getRndIntegerUp(100,200)
        //     nextrope.x=prerope.x+random.getRndInteger(-300,300)
        //     cc.log("prerope:"+prerope.x)
        //     prerope=nextrope
        //     this.node.addChild(nextrope)
        // }
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
        // this.ropes=this.node.children
        // for(var i=0;i<this.ropes.length;i++){
        //     var rope=this.ropes[i]
        //     var down=cc.moveBy(10,cc.v2(0,-1000))
        //     rope.runAction(down)
        // }
    },

    update (dt) {
        cc.log(this.ropes.length)
        // for(var i=0;i<this.ropes.length;i++){
        //     if(this.ropes[i].y<0){

        //     }
        // }
    },
});
