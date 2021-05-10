const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world
var maxDrops=100;
var drops=[]
function preload(){
    
}

function setup(){
   createCanvas(400,700)
   engine=Engine.create();
   world=engine.world;
if (frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
drops.push(new Drops(random(0,400),random(0,400)));

    }

}
    
}

function draw(){
    Engine.update(engine)
    background(0);
for(var i=0;i<maxDrops;i++){

    drops[i].display();
}
}   

