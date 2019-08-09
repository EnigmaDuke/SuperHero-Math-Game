
let imgContainer = document.querySelectorAll(".imgContainer");
let hits = document.querySelector("#hits");
let hitTracker = 0;
let miss = document.querySelector("#miss");
let missTracker = 0;
let score = document.querySelector("#score");
let scoreTracker = 0;
let cursor = document.querySelector("#cursor");
let i;

//Generate Random number
function getRandomNum(num){
  let randomNum = Math.floor(Math.random() * num + 1);
  return randomNum;
}
// console.log(window.innerHeight);

//randomize starting position of each image object
window.onload = function(){
  randomPosition();
  displayResults();
  timer();
  cursor.style.display = "block";
}

//Generate Random Position
function randomPosition(){

  for (i = 0; i < imgContainer.length; i++){
    imgContainer[i].style.top = getRandomNum(374) + "px";
    imgContainer[i].style.left = getRandomNum(1150) + "px";
    imgContainer[i].style.display = "block";
  }
}

let timerSpan = document.querySelector("#timer");

//120 second timer
function timer(){
  let timeLeft = 120;
  let countdown = setInterval(()=>{
    timerSpan.classList.add("timerShadow");
    timerSpan.innerHTML = timeLeft;
    timeLeft -= 1;
    if (timeLeft <= -2){
      clearInterval(countdown);
      timer.innerHTML = gameOver();
    }
    timerSpan.classList.remove("timerShadow");
  }, 1000);
}

//Display Random number on images
let generatedNum = document.querySelectorAll(".generatedNum");

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

let result = subtractNumbers();
console.log(result);
function displayResults(){
//loop through array of images

  for(i = 0; i < generatedNum.length; i++){
    //assign random number
    let number = getRandomNum(25);
  //choose a random element from array
    generatedNum[i].innerHTML = number;
    // generatedNum[i].setAttribute("value", number);
    // console.log(number);
    // generatedNum[i].innerHTML = getRandomNum(25); 
  }
  //assign the result to an image
  let arrayPosition = getRandomNum(generatedNum.length-1);
  generatedNum[arrayPosition].innerHTML = result;
  console.log(result);
  console.log(typeof parseInt(generatedNum[0].innerText));
  return result;
}

//Keeping score
function findResult(){
  if(result == this.innerText){
    scoreTracker += 3;
    score.innerHTML = scoreTracker;
    hitTracker++;
    console.log(hitTracker);
    hits.innerHTML = hitTracker;
    reload();
  } else {
    scoreTracker--;
    score.innerHTML = scoreTracker;
    missTracker++;
    this.style.display = "none";
    miss.innerHTML = missTracker;

    if(missTracker == 9){
      //when game over display a modal to ask to retry or go to the main menu
      gameOver();
        }
      }
}

for(i = 0; i < imgContainer.length; i++){
  imgContainer[i].addEventListener("click", findResult);
}

function gameOver(){
  timerSpan.innerHTML = "Game Over";
  alert("Game Over");
  reload();
}

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
})

function reload(){
  randomPosition();
  result = subtractNumbers();
  displayResults();
}

//return result 
//display random num  result on 1 image
//display random numbers on another image


//IDEA Location chooser 
/* have four background images that can be choosed from
  when a player chooses one there the bg image because that image */
