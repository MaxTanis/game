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
  }
}

function volumedown(){
  if(muziekvolume > 0.1){
    muziekvolume -= 0.1;
    print(muziekvolume);
  }
  else{
    muziekvolume == 0;
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
let player_x = 60
let player_y = 525
let p_width = 50
let p_height = 50
var speed = 10;
var verwspeed = 10;


//eerste level
function Level1() {
  //createCanvas(1700, 600)
  background(bg)
  fill(255,255,255)

  //platform
  var grond_x = 0; 
  var grond_y = 550;
  var grond_widht = 1000;
  var grond_height = 20;
  rect(grond_x, grond_y, grond_widht, grond_height)

  //alle objects hierin
  let blocks = [
  rect(700,450,50,100),
  rect(800,450,50,100)
  ];

  //loop over blokken voor collision
  for (let i = 0; i < blocks.length; i++){
    
  }

  var rx = 600;
  var ry = 450;
  var rw = 50;
  var rh = 100;
  rect(rx,ry,rw,rh)

  //collisions
  if (player_x+p_width/2+verwspeed > rx-rw/2 &&
    player_x-p_width/2-verwspeed < rx+rw/2 &&
    player_y > ry-rh &&
    player_y < ry+rh)
    {
    speed=0;
    if (player_x < rx){         
      player_x = rx-rw/2-p_width/2;     // left edge
    }
    else if (player_x > rx){ 
      player_x = rx+rw/2+p_width/2  
    }   // right edge

    if (player_y < ry){         
      player_y = ry-rh       // top edge
    }
    else if (player_y > ry+rh){ 
      player_y = ry+rh 
    }   // bottom edge
    
  
  else{
    speed = 10;
  }
  }

  //bewegen player
  if (keyIsDown(ESCAPE)) {
    screen = 99
  }
  if (keyIsDown(LEFT_ARROW) && (player_x > 0)) {
    player_x -= speed;
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    if (player_x < 1700) {
    player_x += speed;
    }
  }
  if(keyCode === UP_ARROW) {
    if(player_y > 400){
    player_y -= 10
    } else if(player_y <= 400){
      player_y += 10
    }
  }  
  ellipse(player_x,player_y,p_width,p_height)
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