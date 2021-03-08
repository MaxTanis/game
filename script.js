var screen = 0

let song;
let ele;
let buttonh;
let buttonz;
let muziekvolume = 0.0;
let bg;
muziekvolume.toFixed(3); 

function preload() {
  song = loadSound('song.mp3 ');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("Background.png")
  ele = createAudio('song.mp3');
  buttonh = createButton('Hardere muziek');
  buttonh.position(160, 19);
  buttonh.mousePressed(volumeUp);
  buttonz = createButton('Zachtere muziek');
  buttonz.position(19, 19);
  buttonz.mousePressed(volumedown);
}

function volumeUp(){
  if(muziekvolume < 0.9){
    muziekvolume += 0.1;
    print(muziekvolume);
  }
  else{
    muziekvolume == 1;
    print("hoi");
  }
}

function volumedown(){
  if(muziekvolume > 0.1){
    muziekvolume -= 0.1;
    print(muziekvolume);
  }
  else{
    muziekvolume == 0;
    print("doei");
  }
}


function mouseClicked() {
  // Here we call the volume() function
  // on the sound element to set its volume
  // Volume must be between 0.0 and 1.0
  ele.volume(muziekvolume);
  ele.play();
}

//functie om alle schermen te tekenen
function draw() {
 

  
  if (screen == 0) {
    startScreen()
  }
  if (screen == 1) {
    levelScreen()
  }
  if (screen == 2) {
    Level1()
  }
  if (screen == 3) {
    Level2()
  }
  if (screen == 99) {
    pauseScreen()
  }
}

//beginscherm
function startScreen() {
//  resizeCanvas(600,600)
  background(96, 157, 255);
  fill(255)
  textAlign(CENTER);
  text('WELCOME TO THE GAME', width / 2, height / 2)
  text('click to start', width / 2, height / 2 + 20);
}


//overzicht scherm
function levelScreen() {
  background(255);
  textSize(32)
  // eerste rij
  fill(0, 255, 0);
  rect(50, 50, 100, 75);
  fill(255, 0, 255);
  rect(175, 50, 100, 75);
  fill(255, 0, 0);
  rect(300, 50, 100, 75);
  fill(0, 0, 255);
  rect(425, 50, 100, 75);
  // tweede rij
  fill(0, 255, 0);
  rect(50, 150, 100, 75);
  fill(255, 0, 255);
  rect(175, 150, 100, 75);
  fill(255, 0, 0);
  rect(300, 150, 100, 75);
  fill(0, 0, 255);
  rect(425, 150, 100, 75);
  fill(0,0,0)
  rect(232.5,400,100,75)
  
  fill(255,255,255)
  text('1', 100, 100)
  text('2', 225, 100)
  text('3',350, 100)
  text('4', 475, 100)
  
  text('Back', 282.5 ,450)
}

function Move(x,y) {
  
}

function pauseScreen(){
background(128,128,128)
if (keyIsDown(ESCAPE)) {
    button1 = createButton('Levels')
    button1.position(150,300)
    button2 = createButton('Opnieuw')
    button2.position(450,300)

  }
}
//player variabelen
let x = 60
let y = 525
let pwidth = 50
let pheight = 50
var speed = 10;

//eerste level
function Level1() {
  //createCanvas(1700, 600)
  background(bg)
  fill(255,255,255)

  //platform
  var grondx = 0; 
  var grondy = 550;
  var grondwidht = 600;
  var grondheight = 20;
  rect(grondx, grondy, grondwidht, grondheight)

  var platformx = 600;
  var platformy = 300;
  var platformwidth = 50;
  var platformheight = 300;
  rect(platformx,platformy,platformwidth,platformheight)

  //collisions
  if (x > platformx-platformwidth/2 && x < platformx+platformwidth/2 && y > platformy-platformheight && y < platformy+platformheight){
    speed = speed*-1;
  }
  else{
    speed = 10;
  }

  //bewegen player
  if (keyIsDown(ESCAPE)) {
    screen = 99
  }
  if (keyIsDown(LEFT_ARROW) && (x > 0)) {
    x -= speed;
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    if (x < 1700) {
    x += speed;
    }
  }
  if(keyCode === UP_ARROW) {
    y -= 10
  }  
  ellipse(x,y,pwidth,pheight)
}

function Level2() {
  background(255,0,0)
  fill(0,0,0)
  rect(0, 550, 600, 20)
  if (keyIsDown(LEFT_ARROW) && (x > 0)) {
    x -= 5;
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    if (x < 300) {
    x += 5;
    }
  }
  ellipse(x,y,50,50)
}

//functie om van scherm te wisselen
function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 1) {
    if (mouseX > 50 &&
    mouseX < 150 &&
    mouseY > 50 &&
    mouseY < 100) {
      screen = 2
    } else if (mouseX > 175 &&
    mouseX < 275 &&
    mouseY > 50 &&
    mouseY < 100) {
      screen = 3
    } else if (mouseX >232.5 && 
    mouseX < 332.5 && 
    mouseY > 400 && 
    mouseY < 450)
      screen = 0
  }
}