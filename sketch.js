const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 20;
var dropsArr = [];
var boyImg, boy, umbrella;
var thunder1, thunder2, thunder3, thunder4;

function preload(){
    boyImg = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
    thunder1 = loadAnimation("thunderbolt/1.png","thunderbolt/3.png","thunderbolt/4.png")
    thunder2 = loadAnimation("thunderbolt/1.png","thunderbolt/4.png");
    thunder3 = loadAnimation("thunderbolt/2.png","thunderbolt/3.png")
    thunder4 = loadAnimation("thunderbolt/3.png","thunderbolt/4.png")

    /*thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")*/
}

function setup(){
   createCanvas(400,600);
   
   engine = Engine.create();
   world = engine.world;

   boy = createSprite(200,420);
   boy.addAnimation("hello",boyImg);
   boy.scale = 0.5;

   for(var i = 0; i < maxDrops; i++){
    dropsArr.push(new Drops());
    dropsArr[i].display();
    //console.log(dropsArr.length);
}

   var bodyoptions = {
    'setStatic':true,
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
    }
   umbrella = Bodies.circle(215,365,100,bodyoptions);
   Matter.Body.setStatic(umbrella,true);
   World.add(world, umbrella);
}

function draw(){
    background("black");
    Engine.update(engine);
    //ellipse(umbrella.position.x,umbrella.position.y,200,200)
    drawSprites();
    
    for(var i = 0; i < maxDrops; i++){
        dropsArr[i].display();
        //console.log(dropsArr.length);
    }

    
    //var frameNumber = Math.round(random(50, 150));
    
    if(frameCount % 80 === 0){
        var thunder = createSprite(random(10,370),random(10,30),10,10)
        var lightNum = Math.round(random(1,4));
        console.log(lightNum);
        
        if(lightNum === 1){
            thunder.addAnimation("thunder1", thunder1);
            
        }else if(lightNum === 2){
            thunder.addAnimation("thunder2", thunder2);
            
        }else if(lightNum === 3){
            thunder.addAnimation("thunder3", thunder3);
            
        }else{
            thunder.addAnimation("thunder4", thunder4);
        }
        var lifetime = random(10,50)
        thunder.lifetime = 20;
    }
    
}   

