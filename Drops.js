class Drops{
    constructor() {
        var options = {
            'setStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = random(0,400);
        this.y = random(0,400);
        this.body = Bodies.circle(this.x, this.y, 2.5, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);

        if(pos.y > 600){
            Matter.Body.setPosition(this.body,{x:this.x,y:0});
        }
      }
}