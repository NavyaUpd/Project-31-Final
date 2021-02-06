class Walking{
    constructor(){
        var options = {
            'setStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 5, options);
        World.add(world, this.body);
    }
}