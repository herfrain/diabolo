(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/rope.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '465adkbtJ9IWZaEXIyjLTvG', 'rope', __filename);
// scripts/rope.js

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    properties: _defineProperty({
        physicsBoxCollider: null, //物理碰撞
        diabolo: null, //空竹
        diaboloComponent: null,
        used: false, //是否使用过
        camera: null,
        leftNode: null, //左连接点
        rightNode: null, //右连接点
        leftJoint: null }, "leftJoint", null),

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.diabolo = cc.find("Canvas/diabolo");
        //
        this.physicsBoxCollider = this.node.getComponent(cc.PhysicsBoxCollider);
        //
        this.diaboloComponent = this.diabolo.getComponent("diabolo");
        this.camera = cc.find("Canvas/Main Camera");

        this.leftNode = this.node.getChildByName("left");
        this.rightNode = this.node.getChildByName("right");
        //绑定左右distanceJoint组件
        this.leftJoint = this.leftNode.getComponent(cc.DistanceJoint);
        this.rightJoint = this.rightNode.getComponent(cc.DistanceJoint);
        this.physicsBoxCollider.enabled = false;
    },
    start: function start() {},


    //绑定左右节点
    bandLRJoint: function bandLRJoint() {
        cc.log("bandLRJoint");
        //连接
        this.leftJoint.connectedBody = this.diaboloComponent.rigidbody;
        this.rightJoint.connectedBody = this.diaboloComponent.rigidbody;
        this.leftJoint.enabled = true;
        this.rightJoint.enabled = true;
        this.leftJoint.apply(); //修改之后需要apply()才能真正设置完成
        this.rightJoint.apply();
        //重新设置空竹的属性
        this.diaboloComponent.rope = this.node;
        this.diaboloComponent.leftNode = this.leftNode;
        this.diaboloComponent.rightNode = this.rightNode;
        this.diaboloComponent.leftJoint = this.leftJoint;
        this.diaboloComponent.rightJoint = this.rightJoint;
        this.diaboloComponent.physicsBoxCollider = this.physicsBoxCollider;
    },

    //重新绑定mousejoint
    bandMouseJoint: function bandMouseJoint() {
        this.diabolo.addComponent(cc.MouseJoint); //添加组件
        this.diaboloComponent.mouseJoint = this.diabolo.getComponent(cc.MouseJoint);
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        cc.log('enter');
    },

    //如果检测到与绳子发生碰撞，则建立两边点的链接，并将绑定mousejoint，飞行状态设为false
    //结束碰撞时，如果空竹是往下落的，则添加绳子
    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
        if (this.diaboloComponent.rigidbody.linearVelocity.y < 0 && this.diaboloComponent.isFly) {
            //绑定左右节点
            this.bandLRJoint();
            //绑定mouseJoint
            this.bandMouseJoint();
            // other.enabled=false
            this.diaboloComponent.isFly = false; //固定在绳子上
            //关门
            this.physicsBoxCollider.enabled = true;
        }
    },

    update: function update(dt) {
        //如果空竹在上面，则开门
        //空竹弹出后，开门
        //其他情况，关门
        //cc.log(this.diabolo.isFly)
        //if(this.on)
        // cc.log(this.node.isValid)

        // if(this.node.isValid){//如果还存在
        //     if(this.node.y<this.diabolo.y&&this.physicsBoxCollider.enabled&&this.diaboloComponent.isFly){
        //         //cc.log(1)
        //         this.physicsBoxCollider.enabled=false
        //     }
        //     else if(!this.diaboloComponent.isFly&&!this.physicsBoxCollider.enabled){
        //         this.physicsBoxCollider.enabled=true
        //     }
        // }

    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=rope.js.map
        