cc.game.on(cc.game.EVENT_ENGINE_INITED, () => {
    //开启物理系统
    let physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
    // physicsManager.gravity = cc.v2(0, -400);//重力加速度，每秒下降多少像素
    physicsManager.debugDrawFlags = 
        // 0;
        // cc.PhysicsManager.DrawBits.e_aabbBit |
        cc.PhysicsManager.DrawBits.e_jointBit |
        cc.PhysicsManager.DrawBits.e_shapeBit
    ;
    
    //开启碰撞检测
    var collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled=true;
    collisionManager.enabledDebugDraw=true;
    collisionManager.enabledDrawBoundingBox = true;
});

