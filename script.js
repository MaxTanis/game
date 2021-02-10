var screen = 0

function setup() {
  createCanvas(600, 600);
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
}

//beginscherm
function startScreen() {
  background(96, 157, 255);
  fill(255)
  textAlign(CENTER);
  text('WELCOME TO THE GAME', width / 2, height / 2)
  text('click to start', width / 2, height / 2 + 20);
}


//overzicht scherm
function levelScreen() {
  // print(mouseX, mouseY)
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

//eerste level
function Level1() {
  background(0,255,0)
}

function Level2() {
  background(255,0,0)
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
    }
  }
}