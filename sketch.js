
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dground, tree, treeimg;
var boy, boyimg;
var stone
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10;


function preload()
{
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(100, 460, 23);
	dground = new Ground();
	m1 = new Mango(600, 290, 34);
	m2 = new Mango(855, 325, 35);
	m3 = new Mango(670, 260, 35);
	m4 = new Mango(730, 200, 35);
	m5 = new Mango(710, 320, 36);
	m6 = new Mango(780, 250, 35);
	m7 = new Mango(825, 170, 33);
	m8 = new Mango(880, 260, 35);
	m9 = new Mango(940, 220, 35);
	m10 = new Mango(980, 305, 35);

	attach = new Throw(stone.body, {x:100, y:465});

	tree.createSprite(775, 368);
	tree.addImage(treeimg);
	tree.scale = 0.42;

	boy = createSprite(169, 550);
	boy.addImage(boyimg);
	boy.scale = 0.125;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);

  detectCollision(stone, m1);
  detectCollision(stone, m2);
  detectCollision(stone, m3);
  detectCollision(stone, m4);
  detectCollision(stone, m5);
  detectCollision(stone, m6);
  detectCollision(stone, m7);
  detectCollision(stone, m8);
  detectCollision(stone, m9);
  detectCollision(stone, m10);
 
  drawSprites();
  
  stone.display();
  dground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();

}

function mouseDragged()
{
   Matter.Body.setPosition(stones.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
	attach.fly();
}

function detectCollision(lstone, lmango)
{
	if(lstones.body.position.x- lmango.body.position.x < lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x < lmango.diametre + lstone.diametre
		&& lstone.body.position.y - lmango.body.position.y < lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre)
		{
			Matter.Body.setStatic(lmango.body, false);
		}
}

function keyPressed()
{
	if(keyCode === 32);
	Matter.Body.setPosition(stone.body, {x:100, y:465})
	attach.Launch(stones.body);
}

