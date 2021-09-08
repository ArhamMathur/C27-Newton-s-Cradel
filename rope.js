class Rope
{

    constructor(mya, myb, offsetX, offsetY)
    {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var option =
        {

            bodyA: mya,
            bodyB: myb,
            length: 300,
            pointB: {x: this.offsetX, y: this.offsetY}

        }

        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }

    display()
    {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchore1X = pointA.x
        var Anchore1Y = pointA.y

        var Anchore2X = pointB.x + this.offsetX
        var Anchore2Y = pointB.y + this.offsetY

        var a = this.rope.bodyA.position;
        var b = this.rope.bodyB.position;

        line(Anchore1X, Anchore1Y, Anchore2X, Anchore2Y);

        push();
        stroke("black");
        pop();
        
    }
}