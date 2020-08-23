class Enemies{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius);
      
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
     var random = this.random;  
this.body.velocityX=-5
  this.body.y=random(215, 380);


    }
}