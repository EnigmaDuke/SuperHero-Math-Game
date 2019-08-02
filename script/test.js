let ballSize = 30;
let ballX;
let ballY;
let xSpeed, ySpeed;
let canvas, context;

let batmanLogo = document.querySelector("#first");
const rect = batmanLogo.getBoundingClientRect();
console.log(rect);
console.log(batmanLogo.x);
console.log(batmanLogo.y);
const FPS = 30;
let posX;
let posY;
let speedX;
let speedY;
batmanLogo

setInterval(update, 1000 / FPS);
//starting position
posX = window.innerWidth / 2;
posY = window.innerHeight / 2;
console.log(posX);

//random ball starting speed
xSpeed = Math.floor(Math.random() * 76 + 25) / FPS;
ySpeed = Math.floor(Math.random() * 76 + 25) / FPS;




let body = document.querySelector("body");
console.log(body.innerHeight);
let randX = Math.floor(Math.random() * 1000);
let randY = Math.floor(Math.random() * 500);
// batmanLogo.style.top = randY + "px";
batmanLogo.style.left = randX + "px";
update(randX);


function game(){


}

game();

function game2(){
  generateRandomPosition();
  generateRandomDirection();
  move();
}


function update(par1){
  //move the ball
  // batmanLogo.style.left += speedX;
  // batmanLogo.style.top += speedY;
  par1 = randY;
  batmanLogo.style.top = par1 + "px";
  par1++;
}
// function randX(){
//   let randX = Math.floor(Math.random() * 1000);
//   return randX;
// }

// function randY(){
//   let numY = Math.floor(Math.random() * 500);
//   return numY;
// }

//coin toss - 0 or 1
console.log(Math.floor(Math.random() * 2));