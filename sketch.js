//Create variables here
var dog, happyDog, database, foodStock, foodS, dogImage, happyDogImage;

function preload(){
  happyDogImage = loadImage("dogImg.png");
  dogImage = loadImage("dogImg1.png");
}

function setup(){
  createCanvas(500, 500);

  database = firebase.database();
  
  dog = createSprite(250,250,50,50);
  dog.addImage("dog",dogImage);

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}

function draw(){  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDogImage);
    writeStock(foodS);
  }

  drawSprites();

  textSize(25);
  fill("black");
  text("Food: " + foodStock,250,50);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref("/").update({
    Food: x
  })
}



