class Message{
    constructor(){

        this.image=loadImage("Images/paper.png");
        this.body=Bodies.circle(x,y,radius,options);
        
        this.radius=radius;
        World.add(world,this.body);
      
      }
  
  
  
      display() {
      var pos=this.body.position;
  
      image(this.image,pos.x,pos.y,50,50);
      
    
      }
    
    
}