class Man {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png",
        "Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8png")
        this.body = Bodies.rectangle(x,y,20,75,options);
        this.height = 75;
        this.width = 20
    }
    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        strokeWeight(3);
        stroke("red")
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
    
}