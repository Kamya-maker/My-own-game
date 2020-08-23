const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var king,enemies;

function preload(){

}

function setup(){
    var canvas = createCanvas(1100,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(0,150,500,370);
  

    

    console.log(ground);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    ground.display();
}
   