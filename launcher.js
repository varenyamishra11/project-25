class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            push();   
            strokeWeight(4);
            stroke(219, 252, 5);   
            var pointB = this.pointB;
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);                 
            pop();
        }
    }  
}
