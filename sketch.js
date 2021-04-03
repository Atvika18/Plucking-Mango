
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,220,30);
	mango3=new mango(910,190,30);
	mango4=new mango(1000,140,30);
	mango5=new mango(1080,240,30);
	mango6=new mango(965,270,30);
	mango7=new mango(1150,160,30);
	mango8=new mango(980,60,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
stoneObj=new Stone(237,403,25);
con1 = new Cons(Stone.con, {x:200, y:100});


	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stoneObj.display();
  con1.display();

  groundObject.display();

detectCollision(stoneObj, mango1);
detectCollision(stoneObj, mango2);
detectCollision(stoneObj, mango3);
detectCollision(stoneObj, mango4);
detectCollision(stoneObj, mango5);
detectCollision(stoneObj, mango6);
detectCollision(stoneObj, mango7);


}

function mouseDragged()
{
  Matter.Body.setPosition(Stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
  con1.fly();
}

function detectCollision(stone,mango)
{
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if (distance<=lmango.r+lstone.r)
    {
        Matter.Body.setStatic(lmango.body,false);
    }
}

function keyPressed()
{
  if (keyCode===32)
  {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:230})
    launcherObject.attach(stoneObj.body);
  }
}