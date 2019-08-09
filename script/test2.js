let imgContainer = document.querySelectorAll(".imgContainer");
let hits = document.querySelector("#hits");
let hitTracker = 0;
let miss = document.querySelector("#miss");
let missTracker = 0;
let score = document.querySelector("#score");
let scoreTracker = 0;
let cursor = document.querySelector("#cursor");
let timerSpan = document.querySelector("#timer");
let generatedNum = document.querySelectorAll(".generatedNum");
let i;
let result;
let subResult;
let gameState1 = false;
let gameState2 = false;

//cant have multiple of the same results displayed on the img container
// let result;

// div following cursor
document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

function timer(seconds, level2){
  let timeLeft = seconds;
  let countdown = setInterval(()=>{
    timerSpan.classList.add("timerShadow");
    timerSpan.innerHTML = timeLeft;
    timeLeft -= 1;
    //if time runs out
    if (timeLeft == -2){
      clearInterval(countdown);
      timer.innerHTML = gameOver();
      return level2();
    }

    if(missTracker >= 9){
      clearInterval(countdown);
      gameOver();
    }
    timerSpan.classList.remove("timerShadow");
  }, 1000);
}

//Generate Random Position
function randomPosition(){
  for (i = 0; i < imgContainer.length; i++){
    imgContainer[i].style.top = getRandomNum(374) + "px";
    imgContainer[i].style.left = getRandomNum(1150) + "px";
    imgContainer[i].style.display = "block";
  }
}

//Generate Random number
function getRandomNum(num){
  let randomNum = Math.floor(Math.random() * num + 1);
  return randomNum;
}

//game over message
function gameOver(){
  timerSpan.innerHTML = "Game Over";
  clearInterval();
}

//Calculate random numbers
function addNumbers(){
  let num1 = getRandomNum(25);
  let num2 = getRandomNum(9);
  let result =  num1 + num2;
  cursor.innerHTML = num1 + " + " + num2;
  return result;
}

function subtractNumbers(){
  let num1 = getRandomNum(25);
  let num2 = getRandomNum(9);
    while (num1 <= num2)
    {
      num1 = getRandomNum(25);
      num2 = getRandomNum(9);
    }
  let subResult =  num1 - num2;
  cursor.innerHTML = num1 + " - " + num2;
  return subResult;
}

// --- LEVEL 1 ---

let level1 = function()
{
  gameState1 = true;
  timer(15, level2);
  randomPosition();
  result = addNumbers();
  displayResults();
  cursor.style.display = "block";

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].addEventListener("click", findResult);
  }

  // for(i = 0; i < imgContainer.length; i++){
  //   imgContainer[i].removeEventListener("click", findResult);
  // }
}

  //Display Random number on images
  function displayResults(){
    //loop through array of images
      for(i = 0; i < generatedNum.length; i++){
        //assign random number
        let number = getRandomNum(25);
        if (number == result){
          number = getRandomNum(25);
        }
      //choose a random element from array
        generatedNum[i].innerHTML = number;
      }
      //assign the result to an image
      let arrayPosition = getRandomNum(generatedNum.length-1);
      generatedNum[arrayPosition].innerHTML = result;
      return result;
  }

  //Keeping score
  function findResult()
  {
    if(result === parseInt(this.innerText))
    {
      scoreTracker += 1;
      score.innerHTML = scoreTracker;
      hitTracker++;
      hits.innerHTML = hitTracker;
      reload();
      randomPosition();
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

// --- LEVEL 2 ---
let level2 = function()
{
  gameState1 = false;
  gameState2 = true;
  timer(120)
  randomPosition();
  subResult = subtractNumbers();
  displaySubResults();
  cursor.style.display = "block";

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].removeEventListener("click", findResult);
    imgContainer[i].addEventListener("click", findSubResult);
  }
}

//Display Random number on images
function displaySubResults(){
  //loop through array of images
    for(i = 0; i < generatedNum.length; i++)
    {
      //assign random number
      let number = getRandomNum(25);
      if (number == subResult){
        number = getRandomNum(25);
      }
      //choose a random element from array and assign number to it
      generatedNum[i].innerHTML = number;
    }
    //assign the result to an image
    let arrayPosition = getRandomNum(generatedNum.length-1);
    generatedNum[arrayPosition].innerHTML = subResult;
    return subResult;
}

//Keeping score
function findSubResult()
{
  if(subResult === parseInt(this.innerText))
  {
    scoreTracker = scoreTracker + 1;
    score.innerHTML = scoreTracker;
    hitTracker++;
    hits.innerHTML = hitTracker;
    subReload();
    randomPosition();
  } 
  else 
  {
    scoreTracker--;
    score.innerHTML = scoreTracker;
    missTracker++;
    this.style.display = "none";
    miss.innerHTML = missTracker;
  }
  if(missTracker == 9)
    {
      //when game over display a modal to ask to retry or go to the main menu
      gameOver();
    }
}
//reload game
function subReload(){
  randomPosition();
  subResult = subtractNumbers();
  displaySubResults();
}

// END OF LEVEL 2

let game = (seconds)=>{
  let timeLeft = seconds;
  let countdown = setInterval(()=>{
    timerSpan.classList.add("timerShadow");
    timerSpan.innerHTML = timeLeft;
    timeLeft -= 1;
    //if time runs out
    if (timeLeft == -2){
      clearInterval(countdown);
      timer.innerHTML = gameOver();
      level2();
    }
    timerSpan.classList.remove("timerShadow");
  }, 1000);
}

window.onload = function(){
  level1();
}

function gameState(){
  if (gameState1){
    findResult();
  } else if (gameState2){
    findSubResult();
  }
}