var spaceship, spaceshipImg;
var obstaclesGroup, obstacles, comet1Img, comet2Img, meteorImg, debrisGroup, debris, debrisImg;
var scoreGroup, coin, coinImg, battery, batteryImg;
var spaceBG, spaceImg;

function preload()
{
	spaceImg = loadImage("images/space BG.png");
	spaceshipImg = loadImage("images/spaceship.png");
}

function setup() {
	createCanvas(1200, 800);

	edges = createEdgeSprites();

	spaceBG = createSprite(600, 400, 1200, 800);
	spaceBG.scale = 1.5;
	spaceBG.addImage(spaceImg);
	spaceBG.velocityX = -7;
	
	spaceship = createSprite(170, 400);
	spaceship.scale = 0.65;
	spaceship.addImage(spaceshipImg);
}


function draw() {
	background(0);

	if(spaceBG.x < 300){
		spaceBG.x = width/2;
	}

	if(keyDown(UP_ARROW) && spaceship.y >= 150){
		spaceship.y = spaceship.y - 10;
		
	}

	if(keyDown(DOWN_ARROW) && spaceship.y <= 650){
		spaceship.y = spaceship.y + 10;
	
	}

	spaceship.bounceOff(edges);

	drawSprites();
 
}