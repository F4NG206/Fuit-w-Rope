class Link {
    constructor(body1,body2){
    var lastlink = body1.body.bodies.length-2;
    var options = {pointA:{x:0,y:0}, pointB:{x:0,y:0}, bodyA: body1.body.bodies[lastlink],bodyB: body2,Length: -10,stiffness:0.3}
    this.link = Matter.Constraint.create(options)
    World.add(world,this.link)
    }
}