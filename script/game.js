
let imgContainer = document.querySelectorAll(".imgContainer");
let i;
//Generate Random number
function getRandomNum(num){
  let randomNum = Math.floor(Math.random() * num);
  return randomNum;
}
// console.log(window.innerHeight);

//randomize starting position of each image object
window.onload = function(){
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
  //if result is = to innerhTML
  for(i = 0; i < imgContainer.length; i++){
    if(result == this.innerText){
      return alert ("hi");
    } else if (result != parseInt(generatedNum[i].innerText)){
      this.style.display = "none";
    }
  }
  
  //ALERT hello
  
}

for(i = 0; i < imgContainer.length; i++){
  imgContainer[i].addEventListener("click", findResult);
}


//return result 
//display random num  result on 1 image
//display random numbers on another image

