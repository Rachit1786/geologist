class Sand{
    constructor(x,y){
        var options={
            restitution:1.3,
            friction:5,
            density:1,
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("Red");
        ellipse(0,0,10,10)
        pop();
    }
}