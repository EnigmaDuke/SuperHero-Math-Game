
let imgContainer = document.querySelectorAll(".imgContainer");
let hits = document.querySelector("#hits");
let hitTracker = 0;
let miss = document.querySelector("#miss");
let missTracker = 0;
let score = document.querySelector("#score");
let cursor = document.querySelector("#cursor");
let i;
//Generate Random number
function getRandomNum(num){
  let randomNum = Math.floor(Math.random() * num);
  return randomNum;
}
// console.log(window.innerHeight);

//randomize starting position of each image object
window.onload = function(){
  randomPosition();
  timer();
  cursor.style.display = "block";
}

//Generate Random Position
function randomPosition(){
  for (i = 0; i < imgContainer.length; i++){
    imgContainer[i].style.top = getRandomNum(374) + "px";
    imgContainer[i].style.left = getRandomNum(1150) + "px";
  }
}

//Display Random number on images
let generatedNum = document.querySelectorAll(".generatedNum");

//Calculate random numbers
function addNumbers(){
  let num1 = getRandomNum(25);
  let num2 = getRandomNum(9);
  let result =  num1 + num2;
  cursor.innerHTML = num1 + " + " + num2;
  console.log(result);
  return result;
}
let result = addNumbers();

function displayResults(){
//loop through array of images

  for(i = 0; i < generatedNum.length; i++){
    //assign random number
    let number = getRandomNum(25);
  //choose a random element from array
    generatedNum[i].innerHTML = number;
    // generatedNum[i].setAttribute("value", number);
    console.log(number);
    // generatedNum[i].innerHTML = getRandomNum(25); 
  }

  //assign the result to an image
  let arrayPosition = getRandomNum(generatedNum.length-1);
  generatedNum[arrayPosition].innerHTML = result;
  console.log(result);
  console.log(typeof parseInt(generatedNum[0].innerText));
  return result;
}
displayResults();

function findResult(){
  //if result is = to innerHTML
  // for(i = 0; i < imgContainer.length; i++){
  //   if(result == this.innerText){
  //     hitTracker++;
  //     console.log(hitTracker);
  //     hits.innerHTML = hitTracker;
  //   } else {
  //     this.style.display = "none";
  //   }
  // }
  if(result == this.innerText){
        hitTracker++;
        console.log(hitTracker);
        hits.innerHTML = hitTracker;
      } else {
        missTracker++;
        this.style.display = "none";
        miss.innerHTML = missTracker;

        if(missTracker == 3){
          //when game over display a modal to ask to retry or go to the main menu
          alert("Game Over!!");
        }
      }
}

for(i = 0; i < imgContainer.length; i++){
  imgContainer[i].addEventListener("click", findResult);
}

let timerSpan = document.querySelector("#timer");

function timer(){
  let timeLeft = 90;
  let countdown = setInterval(()=>{
    timerSpan.innerHTML = timeLeft;
    timeLeft -= 1;
    if (timeLeft <= 0){
      clearInterval(countdown);
      timer.innerHTML = gameOver();
    }
  }, 1000);
}

function gameOver(){
  timerSpan.innerHTML = "Game Over";
}

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
})

//return result 
//display random num  result on 1 image
//display random numbers on another image

