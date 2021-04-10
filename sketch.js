var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var starobj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 500);

	// fairyVoice.play();

	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	//star = createSprite(650,30);
	//star.addImage(starImg);
	//star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});

	World.add(world, starBody);
	
	Engine.run(engine);
	starobj=createSprite(650,30,20,20);
	starobj.addImage(starImg);
	starobj.scale=0.2;
}


function draw() {
  background(bgImg);
starobj.x=starBody.position.x;
starobj.y=starBody.position.y;
if(starobj.y > 270 && starBody.position.y>270){
	Matter.Body.setStatic(starBody,true)
}
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode===32){
		Matter.Body.setStatic(starBody,false)
	}
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+20;
	}
	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-20;
	}
}
