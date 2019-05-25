cc.Class({
    extends: cc.Component,

    properties: {
        leftNode:null,
        rightNode:null,
        diabolo:null,//空竹
        diaboloComponent:null,
        graphics:null,
        once:true,
    },
        

    // use this for initialization
    onLoad: function () {
        this.diabolo=cc.find("Canvas/diabolo")
        this.diaboloComponent=this.diabolo.getComponent("diabolo")
        this.leftNode=this.node.getChildByName("left")
        this.rightNode=this.node.getChildByName("right")
        this.graphics = this.getComponent(cc.Graphics);  //初始化画图工具
        // this.graphics.lineWidth = 5
        // this.graphics.strokeColor.fromHEX('#D2691E');
    },
    //画绳子
    drawLine: function(){
        
    },
    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         //获取空竹位置
        var diaboloV2 = this.node.convertToNodeSpaceAR(this.diabolo.convertToWorldSpaceAR(cc.v2(0,0)))         
        if(this.node == this.diaboloComponent.rope){
            this.graphics.clear();
            this.graphics.moveTo(this.diaboloComponent.leftNode.x, this.diaboloComponent.leftNode.y)
            this.graphics.lineTo(diaboloV2.x, diaboloV2.y);
            this.graphics.lineTo(this.diaboloComponent.rightNode.x, this.diaboloComponent.rightNode.y);
            this.graphics.stroke()
        }
        else{//如果空竹没在绳子上，则只需画一次
            this.graphics.clear()
            this.graphics.moveTo(this.leftNode.x, this.leftNode.y);
            this.graphics.lineTo(this.rightNode.x, this.rightNode.y);
            this.graphics.close()
            this.graphics.stroke() 
        }
     },
});