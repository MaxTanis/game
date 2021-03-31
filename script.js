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
  stone = loadImage('stone.jpg')
  character = loadImage('poppetje.jpg')
  rays = loadImage('rays.jpg')
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
let player_y = 500
let p_width = 50
let p_height = 50

//platform
var grond_x = 0; 
var grond_y = 550;

//snelheid blok
let xspeed = 0
let yspeed = 0

let lastX = 0
let lastY = 0;
let SPEED = 5;

//objecten
let blocks = [];
//finish list
let eindelvl = [];
//timers
var eindeTimer = 0;
var seconds = 0;

//eerste level
function Level1() {
  background(bg)
  fill(255,255,255)
  
  var grond_widht = windowWidth;
  var grond_height = 50;
  image(stone, grond_x, grond_y, grond_widht, grond_height)

  //alle objecten in het level
  rect1 = {x:700, y:350, w:50, h:200};
  rect2 = {x:900, y:350, w:50, h:200};
  rect3 = {x:1000, y:450, w:100, h:50};
  rect4 = {x:1200, y:350, w:50, h:200};
  rect5 = {x:1400, y:450, w:100, h:50};
  rect6 = {x:1400, y:250, w:100, h:50};
  rect7 = {x:400, y:450, w:100, h:50};
  // rect8 = {x:1100, y:450, w:100, h:50};
  // rect9 = {x:1100, y:450, w:100, h:50};
  blocks.push(rect1);
  blocks.push(rect2);
  blocks.push(rect3);
  blocks.push(rect4);
  blocks.push(rect5);
  blocks.push(rect6);
  blocks.push(rect7);
  // blocks.push(rect8);
  // blocks.push(rect9);


  //functie om alle blokken te tekenen
  blocks.forEach(function(block) {
    image(stone, block.x,block.y,block.w, block.h);
  });	


  //hitbox van het einde van het level
  recteind = {x:1400, y:200, w:100, h:50};
  //voor het testen is de onderste handig
  //recteind = {x:400, y:200, w:100, h:50};
  eindelvl.push(recteind);

  //functie om het einde van het level te tekenen
  eindelvl.forEach(function(gebied) {
    image(rays, gebied.x,gebied.y,gebied.w, gebied.h);
  });	

  if(eindeisColliding()){
    eindeTimer = 1;
  }

  if(eindeTimer == 1){
    fill(255,255,255);
    text('Level Passed!', player_x, player_y - 50);

//probeerde een timer te maken
    // var i=1;
    // for (i = 1; i < 60000; i++) {
    //   seconds = i;
    //   print (i);
    // }



    // print (seconds);
    // if (seconds > 600) {
    //   seconds = 0;
    //   eindeTimer = 0;
    //   i = 0;
    //   levelScreen();
    // }
  }
  
    
  


//voor de collision in horizontale richting
  if(player_x >= 0 && player_x + 50 <= grond_widht){
    if(isColliding()){
    // when we stop pressing a button, 
    // speed is 0 so we bounce out of collision
      if(xspeed == 0)
        player_x = player_x + (lastX * -1);
    }
    else{    
      player_x += xspeed;
    // remember last xspeed
    lastX = xspeed;
    }           
  } 

  //hiermee gaat hij niet door de vloer
  if(player_y > 500)
    if(yspeed == 0)
        player_y = player_y + (lastY * -1);      
  //voor de collision in verticale richting      
	if(player_y >= 0 && player_y <= 500){
    if(isColliding()){
      if(yspeed == 0)
        player_y = player_y + (lastY * -1);      
    } else {
        player_y += yspeed; 
      // remember last yspeed 
        lastY = yspeed;
    
    }  
  } 

  image(character, player_x,player_y,p_width,p_height)
}

function Level2() {
  background(bg)
  fill(255,255,255)
  
  var grond_widht = windowWidth;
  var grond_height = 50;
  image(stone, grond_x, grond_y, grond_widht, grond_height)

  //alle objecten in het level
  rect1 = {x:700, y:450, w:50, h:100};
  blocks.push(rect1);

  //functie om alle blokken te tekenen
  blocks.forEach(function(block) {
    image(stone, block.x,block.y,block.w, block.h);
  });	

  //voor de collision in horizontale richting
  if(player_x >= 0 && player_x + 50 <= grond_widht){
    if(isColliding()){
    // when we stop pressing a button, 
    // speed is 0 so we bounce out of collision
      if(xspeed == 0)
        player_x = player_x + (lastX * -1);
    }
    else{    
      player_x += xspeed;
    // remember last xspeed
    lastX = xspeed;
    }           
  } 

  //hiermee gaat hij niet door de vloer
  if(player_y > 500)
    if(yspeed == 0)
        player_y = player_y + (lastY * -1);      
  //voor de collision in verticale richting      
	if(player_y >= 0 && player_y <= 500){
    if(isColliding()){
      if(yspeed == 0)
        player_y = player_y + (lastY * -1);      
    } else {
        player_y += yspeed; 
      // remember last yspeed 
        lastY = yspeed;
    
    }  
  }  
  image(character, player_x,player_y,p_width,p_height)
}

function keyPressed() {

  switch(keyCode) {
    // naar links
    case 37:
    case 65:
      xspeed = -SPEED;
    break;
    
    // naar rechts
    case 39:
    case 68:
      xspeed = SPEED;
      break;

    // naar boven
    case 38:
    case 87:
      yspeed = -SPEED;
      
      break;
    
    // naar beneden
    case 40:
    case 83:
      yspeed = SPEED;
    break;
    }
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
    case 40:
		case 83:
			yspeed = 0;
		  break;
	}
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

function isColliding(){
  // normaal gesproken
  colliding = false;
    // voor elk blok controleren of we er niet tegenaan botsen
  blocks.forEach(function(block) {
    
    let bottom = block.y + block.h;
    let right = block.x + block.w;
    let height = player_y + 50;
    let width = player_x + 50;

    let bottomCollision = player_y > block.y && player_y < bottom;
    let topCollision = height > block.y && height < bottom;

    // horizontaal
    if(bottomCollision || topCollision){
      let leftCollision = player_x > block.x && player_x < right;
      let rightCollision = width > block.x && width < right;
      
      //verticaal        
      if(leftCollision || rightCollision){
        colliding = true;
      }             
    }
  });
  return colliding;
  
}

// Is het poppetje bij het einde van het level? 
function eindeisColliding(){
  // normaal gesproken
  eindecolliding = false;
    // voor elk blok controleren of we er niet tegenaan botsen
  eindelvl.forEach(function(gebied) {
    
    let eindebottom = gebied.y + gebied.h;
    let einderight = gebied.x + gebied.w;
    let eindeheight = player_y + 50;
    let eindewidth = player_x + 50;

    let eindebottomCollision = player_y > gebied.y && player_y < eindebottom;
    let eindetopCollision = eindeheight > gebied.y && eindeheight < eindebottom;

    // horizontaal
    if(eindebottomCollision || eindetopCollision){
      let eindeleftCollision = player_x > gebied.x && player_x < einderight;
      let einderightCollision = eindewidth > gebied.x && eindewidth < einderight;
      
      //verticaal        
      if(eindeleftCollision || einderightCollision){
        eindecolliding = true;
      }             
    }
  });
  return eindecolliding;
  
}