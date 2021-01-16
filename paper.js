class Paper{
    constructor(x,y,radius)
    {
        var options={
            isStatic :false,
            restitution :0.3,
            friction :0.5,
            densitiy :1.2
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(225,0,225);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}