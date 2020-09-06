const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var wall,thickness;
var car,speed,weight;
function setup(){
    var canvas = createCanvas(400,400);
car.createSprite(50,200,20,50);
    wall.createSprite(1500,200,60,heigth/2)
    speed=random(223,321);
    weight=(30,52);

    engine = Engine.create();
    world = engine.world;
    speed=random(55,90)
    weight=random(400,1500)
    thickness=random(22,83);
    wall=createSprite(1200,200,thickness,height/2);
    
car.velocityX = speed; 

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();

    
}
if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var  defromation=0.5*weight*speed*speed/22509;
    if(deformation>180){

    }
    car.shapeColor=Color(255,0,0);

     {
       
if(deformation<180 && deformation<100)
{
    car.ShapeColor=color(230,230,0);
    {
        if(deformation<100)
        {

        car.shapeColor=color(0,255,0);
        
    }
}
