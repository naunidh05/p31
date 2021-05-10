class Drops{
    constructor(x,y){
        var opt={
            restitution:0.1
        }
        this.body=Bodies.circle(x,y,5,opt)
        this.radius=5
        World.add(world,this.body)
    }
    display(){
var pos=this.body.position
fill("blue")
ellipseMode(CENTER)
ellipse(pos.x,pos.y,this.radius,this.radius)



    }

    }
