
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

/* --- --- Code For Level 1 --- --- */
function levelOne()
{
  timer(90);
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
}


// END OF LEVEL 1

//GENERAL FUNCTIONS

//randomize starting position of each image object
window.onload = function(){
  levelOne();
}

// Game Timer
function timer(seconds){
  let timeLeft = seconds;
  let countdown = setInterval(()=>{
    timerSpan.classList.add("timerShadow");
    timerSpan.innerHTML = timeLeft;
    timeLeft -= 1;
    if (timeLeft == -2){
      clearInterval(countdown);
      timer.innerHTML = gameOver();
      nextLevel();
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

function gameOver(){
  timerSpan.innerHTML = "Game Over";

}

function nextLevel(){
  setTimeout(()=>{
  randomPosition();
  level2();
  }, 3000);
}

/* --- --- Code for Level 2 --- --- */

function level2(){
 
  timer(120);
  randomPosition();
  result = subtractNumbers();
  displaySubResults();
  cursor.style.display = "block";

  for(i = 0; i < imgContainer.length; i++){
    imgContainer[i].addEventListener("click", findSubResult);
  }

  //Display Random number on images
  function displaySubResults(){
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
  function subtractNumbers(){
    let num1 = getRandomNum(25);
    let num2 = getRandomNum(9);
    while (num1 <= num2){
      num1 = getRandomNum(25);
      num2 = getRandomNum(9);
    }
    let result =  num1 - num2;
    cursor.innerHTML = num1 + " - " + num2;
    console.log(result);
    return result;
  }

  //Keeping score
  function findSubResult()
  {
    if(result == this.innerText)
    {
      scoreTracker += 3;
      score.innerHTML = scoreTracker;
      hitTracker++;
      console.log(hitTracker);
      hits.innerHTML = hitTracker;
      subReload();
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

  //reload game
  function subReload(){
    randomPosition();
    result = subtractNumbers();
    displaySubResults();
  }


}







document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});


//return result 
//display random num  result on 1 image
//display random numbers on another image


//IDEA Location chooser 
/* have four background images that can be choosed from
  when a player chooses one there the bg image because that image */
