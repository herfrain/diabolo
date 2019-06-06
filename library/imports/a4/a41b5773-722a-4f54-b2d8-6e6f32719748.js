"use strict";
cc._RF.push(module, 'a41b5dzcipPVLLYbm8ycZdI', 'ropes');
// scripts/ropes.js

'use strict';

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
var sc = require('score');
var random = require('random');
cc.Class({
    extends: cc.Component,

    properties: {
        ropes: null,
        camera: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        // this.enabled=false
        var diabolo = cc.find("Canvas/diabolo");
        var diaboloComponent = diabolo.getComponent("diabolo");
        var ropeList = this.node.children;
        var firstrope = ropeList[0];
        var prerope = firstrope;
        for (var i = 0; i < 5; i++) {
            var nextrope = cc.instantiate(prerope);
            // cc.log(random.getRndIntegerUp(-300,300))
            nextrope.y = prerope.y + random.getRndIntegerUp(100, 200);
            nextrope.x = random.getRndIntegerUp(-this.camera.parent.width / 2 + 100, this.camera.parent.width / 2 - 100);
            // cc.log("prerope:"+prerope.x)
            prerope = nextrope;
            this.node.addChild(nextrope);
        }
        var leftNode = firstrope.getChildByName("left");
        var rightNode = firstrope.getChildByName("right");
        //绑定左右distanceJoint组件
        var leftJoint = leftNode.getComponent(cc.DistanceJoint);
        var rightJoint = rightNode.getComponent(cc.DistanceJoint);
        leftJoint.connectedBody = diaboloComponent.rigidbody;
        rightJoint.connectedBody = diaboloComponent.rigidbody;
        // cc.log(firstrope)
    },
    start: function start() {
        this.ropes = this.node.children;
    },
    update: function update(dt) {
        //在摄像机顶部添加绳子
        // if(Math.abs(this.camera.y)%200==0)
        // if(this.camera.y+this.camera.parent.height>this.ropes[this.ropes.length-1].y)
        if (this.camera.y + this.camera.parent.height > this.ropes[this.ropes.length - 1].y) {
            // cc.log("create rope")
            var prerope = this.ropes[this.ropes.length - 1];

            for (var i = 0; i < 5; i++) {
                var nextrope = cc.instantiate(prerope);
                // cc.log(random.getRndIntegerUp(-300,300))
                if (sc.score < 10000) {
                    //按分数来增加难度
                    nextrope.y = prerope.y + random.getRndIntegerUp(100, 200);
                } else if (sc.score < 30000) {
                    nextrope.y = prerope.y + random.getRndIntegerUp(200, 300);
                } else {
                    nextrope.y = prerope.y + random.getRndIntegerUp(300, 400);
                }
                nextrope.x = random.getRndIntegerUp(-this.camera.parent.width / 2 + 100, this.camera.parent.width / 2 - 100);
                // cc.log("prerope:"+prerope.x)
                prerope = nextrope;
                this.node.addChild(nextrope);
            }
        }
        // cc.log(this.ropes.length)
        for (var i = 0; i < this.ropes.length; i++) {
            if (this.ropes[i].isValid) {
                if (this.ropes[i].y < this.camera.y - this.camera.parent.height / 2) {
                    //低于摄像机下边界
                    // cc.log(2)
                    this.ropes[i].destroy();
                }
            }
        }
    }
});

cc._RF.pop();