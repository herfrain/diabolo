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
        ropes:{
            default:null,
            type:cc.Node
        },
        ropePrefab:{
            default:null,
            type:cc.Prefab
        },
        once:true,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.log(this.ropePrefab)
    },

    update (dt) {
        this.node.y++//移动摄像机
        //在摄像机顶部添加绳子
        if(Math.abs(this.node.y)%200==0){
            //加载prefab预制资源
            cc.loader.loadRes('rope.prefab', (err, resource)=>{
                if(err){ return; }
                // this.newnode = cc.instance(resource);
                // this.node.addChild(this.newnode);
                var rope=cc.instantiate(resource)//克隆实例
                rope.y=this.node.y+this.node.parent.height/2//从摄像机顶部开始
                if(this.once){
                    rope.x=-200
                    this.once=false
                }else{
                    rope.x=200
                    this.once=true
                }
                
                this.ropes.addChild(rope)//添加绳子
            });
        }
        //其实只要改变画布canvas的位置，就会一直往上运动
        // this.node.parent.y++
    },
});
