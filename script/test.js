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



// GARBAGE

function levelOne()
{
  timer(5);
  randomPosition();
  result = addNumbers();
  displayResults();
  cursor.style.display = "block";

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].addEventListener("click", findResult);
  }

  //Display Random number on images
  function displayResults(){
    //loop through array of images
      for(i = 0; i < generatedNum.length; i++){
        //assign random number
        let number = getRandomNum(25);
      //choose a random element from array
        generatedNum[i].innerHTML = number;
      }
      //assign the result to an image
      let arrayPosition = getRandomNum(generatedNum.length-1);
      generatedNum[arrayPosition].innerHTML = result;
      console.log(result);
      console.log(typeof parseInt(generatedNum[0].innerText));
      return result;
  }

    //Calculate random numbers
  function addNumbers(){
    let num1 = getRandomNum(25);
    let num2 = getRandomNum(9);
    let result =  num1 + num2;
    cursor.innerHTML = num1 + " + " + num2;
    console.log(result);
    return result;
  }

  //Keeping score
  function findResult()
  {
    if(result == this.innerText)
    {
      scoreTracker += 3;
      score.innerHTML = scoreTracker;
      hitTracker++;
      console.log(hitTracker);
      hits.innerHTML = hitTracker;
      reload();
    } 
    else 
    {
      scoreTracker--;
      score.innerHTML = scoreTracker;
      missTracker++;
      this.style.display = "none";
      miss.innerHTML = missTracker;

      if(missTracker == 9)
      {
        //when game over display a modal to ask to retry or go to the main menu
        gameOver();
      }
    }
  }

  function reload(){
    randomPosition();
    result = addNumbers();
    displayResults();
  }
}