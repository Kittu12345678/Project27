class Bob{


    constructor(x, y, radius){

        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;

    }

    display(){

        

        fill("gold");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

    }


 }