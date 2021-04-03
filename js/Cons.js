class Cons 
{
    Constructor (bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.pointB = pointB;
        this.bodyA= bodyA
        this.con = Constrait.create(options);
        World.add(world, this.con);
    }

fly ()
{
    this.con.bodyA = null;
}

    display ()
    {
        var pointA = this.bodyA;
        var pointB = this.pointB;
        strokeWeight(4);
        line (pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
