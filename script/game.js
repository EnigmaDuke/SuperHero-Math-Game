let imgContainer = document.querySelectorAll(".imgContainer");
let userInfo = document.querySelector("#userInfo");
let playGame = document.querySelector("#play");
let score = document.querySelector("#score");
let hits = document.querySelector("#hits");
let miss = document.querySelector("#miss");
let currentLvl = document.querySelector("#level");
let home = document.querySelector("#home");
let hitTracker = 0;
let missTracker = 0;
let scoreTracker = 0;
let cursor = document.querySelector("#cursor");
let timerSpan = document.querySelector("#timer");
let generatedNum = document.querySelectorAll(".generatedNum");
let i;
let result;
let subResult;
let gameState;

// --- --- User Information --- --- 

window.onload = function(){
  userInfo.style.display = "block";
}
//find a way with local storage
let name = document.querySelector("#userName");
let age = document.querySelector("#userAge");

playGame.addEventListener("click", ()=>{
  userInfo.style.display = "none";
  level1();
  // alert(name.value);
  // alert(age.value);
});

//go back to main page at the end of game
home.addEventListener("click", ()=>{
  window.location.href = "index.html";
});

//remove click button Name must be mandatory
// let close = document.querySelector(".close");
// close.addEventListener("click", ()=>{
//   userInfo.style.display = "none";
//   // gameRules.style.display = "none";
// });


// div following the cursor
if(window.innerWidth >= 1000){
  document.addEventListener('mousemove', function(e)
  {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
}


console.log(window.innerWidth);
if(window.innerWidth >= 300 &&  window.innerWidth <= 600){
  document.removeEventListener('mousemove', function(e)
  {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
}



// Game countdown timer
function timer(seconds, gamestate)
{
  let timeLeft = seconds;
  let countdown = setInterval(()=>
  {
    timerSpan.classList.add("timerShadow");
    timerSpan.innerHTML = timeLeft;
    timeLeft -= 1;
    //if time runs out
    if (timeLeft == -2){
      clearInterval(countdown);
      timer.innerHTML = gameOver();
      if (gamestate == 1)
      {
        return level2();
      } else if(gamestate == 2)
      {
        return level3();
      } else if(gamestate == 4){
        clearInterval(countdown);
        return endGame();
      }
    }
    if(missTracker >= 6)
    {
      clearInterval(countdown);
      gameOver();
    }
    timerSpan.classList.remove("timerShadow");
  }, 1000);
}

// Disable images once the game is over
// function disableImgs()
// {
//   for(var i = 0; i < imgContainer.length; i++)
//   {
//     imgContainer[i].classList.add("disable");
//   }
// }

//Generate Random Position
function randomPosition()
{
  for (i = 0; i < imgContainer.length; i++)
  // {
  //   imgContainer[i].style.top = getRandomNum(374) + "px";
  //   imgContainer[i].style.left = getRandomNum(1150) + "px";
  //   imgContainer[i].style.display = "block";
  // }
   {
    imgContainer[i].style.top = getRandomNum(374) + "px";
    console.log(window.innerWidth);
    if(window.innerWidth >= 1000){
      imgContainer[i].style.left = getRandomNum(1150) + "px";
    } else if(window.innerWidth >= 300 &&  window.innerWidth <= 600){
      imgContainer[i].style.left = getRandomNum(300) + "px";
    }
    
    imgContainer[i].style.display = "block";
  }
}

function moveElement(){
  let newHeight = Math.random();
  let newWidth = Math.random();
  for (i = 0; i < imgContainer.length; i++)
  {
    imgContainer[i].style.top = newHeight + "px";
    imgContainer[i].style.left = newWidth + "px";
  }
}

// $(document).ready(randMove);

function randMove(){
  for (i = 0; i < imgContainer.length; i++){
    animateDiv(imgContainer[i]);
  }
}

function makeNewPosition(){
    
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 300;
  var w = $(window).width() - 150;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myClass)
{
  var newq = makeNewPosition();
  $(myClass).animate(
  {
    top: newq[0], left: newq[1] 
  }, 5000, function()
  {
    animateDiv(myClass);
  });
};

//Generate Random number
function getRandomNum(num)
{
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

// End of Game stats
let endGameSection = document.querySelector("#endGame");
let endOfGame = document.querySelector("#endOfGame");
let playerName = document.querySelector("#playerName");
let playerAge = document.querySelector("#playerAge");
let finalScore = document.querySelector("#finalScore");
let finalHits = document.querySelector("#finalHits");
let finalMiss = document.querySelector("#finalMiss");

let endGame = ()=>{
  cursor.style.display = "none";
  endGameSection.style.display = "block";
  endOfGame.style.display = "block";
  playerName.innerHTML = name.value;
  playerAge.innerHTML = age.value;
  finalScore.innerHTML = scoreTracker;
  finalHits.innerHTML = hitTracker;
  finalMiss.innerHTML = missTracker;

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].style.display = "none";
  }
}

// --------- LEVEL 1 ---------

let level1 = function()
{
  currentLvl.innerHTML = 1;
  gameState = 1;
  timer(30, gameState);
  randomPosition();
  randMove();
  result = addNumbers();
  displayResults();
  cursor.style.display = "block";

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].addEventListener("click", findResult);
  }
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
     
      return hitTracker;
    } 
    else 
    {
      scoreTracker--;
      score.innerHTML = scoreTracker;
      missTracker++;
      this.style.display = "none";
      miss.innerHTML = missTracker;
      //if score goes below 0
      if(scoreTracker < 0 || missTracker == 6)
      {
        cursor.style.display = "none";
        endGameSection.style.display = "block";
        endOfGame.style.display = "block";
        playerName.innerHTML = name.value;
        playerAge.innerHTML = age.value;
        finalScore.innerHTML = scoreTracker;
        finalHits.innerHTML = hitTracker;
        finalMiss.innerHTML = missTracker;
      
        for(i = 0; i < imgContainer.length; i++){
          imgContainer[i].style.display = "none";
        }
      }

      return missTracker;
    }
  }

  function reload(){
    randomPosition();
    result = addNumbers();
    displayResults();
  }

// --------- LEVEL 2 ---------

let level2 = function()
{
  currentLvl.innerHTML = 2;
  gameState = 2;
  timer(45, gameState);
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
    return scoreTracker;
  } 
  else 
  {
    scoreTracker--;
    score.innerHTML = scoreTracker;
    missTracker++;
    this.style.display = "none";
    miss.innerHTML = missTracker;
  }
  if(scoreTracker < 0 || missTracker == 6)
  {
    cursor.style.display = "none";
    endGameSection.style.display = "block";
    endOfGame.style.display = "block";
    playerName.innerHTML = name.value;
    playerAge.innerHTML = age.value;
    finalScore.innerHTML = scoreTracker;
    finalHits.innerHTML = hitTracker;
    finalMiss.innerHTML = missTracker;
  
    for(i = 0; i < imgContainer.length; i++){
      imgContainer[i].style.display = "none";
    }
  }
    return missTracker;
}
//reload game
function subReload(){
  randomPosition();
  subResult = subtractNumbers();
  displaySubResults();
}

// END OF LEVEL 2

// --------- LEVEL 3 ---------
let level3 = function()
{
  currentLvl.innerHTML = 3;
  gameState = 4
  timer(30, gameState);
  randomPosition();
  divResult = divideNumbers();
  displayDivResults();
  cursor.style.display = "block";

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].removeEventListener("click", findResult);
    imgContainer[i].removeEventListener("click", findSubResult);
    imgContainer[i].addEventListener("click", findDivResult);
  }
}

function divideNumbers()
{
  let num1 = getRandomNum(25);
  let num2 = getRandomNum(9);
    while (num1 % num2 !== 0)
    {
      num1 = getRandomNum(25);
      num2 = getRandomNum(9);
    }
    console.log(num1, num2);
  let divResult =  num1 / num2;
  cursor.innerHTML = num1 + " / " + num2;
  return divResult;
}

//Display Random number on images
function displayDivResults(){
  //loop through array of images
    for(i = 0; i < generatedNum.length; i++)
    {
      //assign random number
      let number = getRandomNum(25);
      if (number == divResult){
        number = getRandomNum(25);
      }
      //choose a random element from array and assign number to it
      generatedNum[i].innerHTML = number;
    }
    //assign the result to an image
    let arrayPosition = getRandomNum(generatedNum.length-1);
    generatedNum[arrayPosition].innerHTML = divResult;
    return divResult;
}

//Keeping score
function findDivResult()
{
  if(divResult === parseInt(this.innerText))
  {
    scoreTracker = scoreTracker + 1;
    score.innerHTML = scoreTracker;
    hitTracker++;
    hits.innerHTML = hitTracker;
    divReload();
    randomPosition();
    if(scoreTracker < 0)
    {
      gameOver();
    }
    return scoreTracker;
  } 
  else 
  {
    scoreTracker--;
    score.innerHTML = scoreTracker;
    missTracker++;
    this.style.display = "none";
    miss.innerHTML = missTracker;
  }
  if(scoreTracker < 0 || missTracker == 6)
  {
    cursor.style.display = "none";
    endGameSection.style.display = "block";
    endOfGame.style.display = "block";
    playerName.innerHTML = name.value;
    playerAge.innerHTML = age.value;
    finalScore.innerHTML = scoreTracker;
    finalHits.innerHTML = hitTracker;
    finalMiss.innerHTML = missTracker;
  
    for(i = 0; i < imgContainer.length; i++){
      imgContainer[i].style.display = "none";
    }
  }
    return missTracker;
}

//reload game
function divReload(){
  randomPosition();
  divResult = divideNumbers();
  displayDivResults();
}

// END OF LEVEL 3


