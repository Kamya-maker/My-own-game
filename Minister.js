class Minister{
    constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height;
    }

    display(){
        pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

    }
}