// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var random=require('random')
cc.Class({
    extends: cc.Component,

    properties: {
        diabolo:{
            default:null,
            type:cc.Node
        },//空竹对象
        diaboloComponent:null,
        preH:0,//前一个高度
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.enabled=false
        this.diaboloComponent=this.diabolo.getComponent("diabolo")//获取组件
    },

    start () {
        this.preH=this.diaboloComponent.rope.y
    },

    update (dt) {

        // 如果高度差大于0，即往上运动时，摄像机跟随移动
        if(this.diaboloComponent.y-this.preH>0){
            // cc.log(this.diaboloComponent.y)
            var h=this.diaboloComponent.y-this.preH
            this.preH=this.diaboloComponent.y
            //缓动效果
            var moveAction=cc.moveBy(2,cc.v2(0,h)).easing(cc.easeCubicActionOut())
            this.node.runAction(moveAction)
        }
    },
});
