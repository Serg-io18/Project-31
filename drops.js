class Drop {
    constructor(x,y) {
        var options = {
            friction:0.1
        }
        
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20
        World.add(world,this.body);
    }

    display() {
        var pos =this.body.position;
         var angle = this.body.angle;
         
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         ellipseMode(CENTER);
         fill(255);
         strokeWeight(3);
         stroke("red")
         ellipse(0, 0, this.radius);
        
         pop();
    }
}