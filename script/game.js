

let first = document.querySelector("#first");
let main = document.querySelector("main");
let rect = main.getBoundingClientRect();
let bottomView = (window.scrollY + window.innerHeight) - 75;
let rightView = (window.scrollX + window.innerWidth) - 100;
console.log(window.innerWidth);
//75 is the height of the batman logo

console.log(rect);
// alert(height);
// test.addEventListener("click", randomNum);

//generate random number

// function randomNumX(){
//   let rand = Math.floor(Math.random() * 200);
//   return rand;
// }

// function randomNumY(){
//   let rand = Math.floor(Math.random() * 1300);
//   return rand;
// }

// let itemMove = document.querySelectorAll(".itemMove");

// function randomPosition(){
//   for (let i = 0; i < itemMove.length; i++){
//     itemMove[i].style.top = randomNumX() + "px";
//     itemMove[i].style.left = randomNumY() + "px";
//   }
// }

function randomNumX(){
  let rand = Math.floor(Math.random() * 1300);
  return rand;
}

function randomNumY(){
  let rand = Math.floor(Math.random() * 500);
  return rand;
}

function randomPosition(){
  first.style.top = randomNumX() + "px";
  first.style.left = randomNumY() + "px";
}

function posX() {
  let rand = Math.floor(Math.random() * 300);
  first.style.top = random
  return rand;
}

// function move(){
//   let pos = 0;
//   let id = setInterval(frame, 10);
//   function frame() {
//     if (pos == height){
//       clearInterval(id);
//     } else {
//       pos++;
//       first.style.top = pos + 'px';
//       first.style.left = pos + 'px';
//     }
//   }
// }

function move(){
  // first.style.top = randomNumY() + 'px';
  // first.style.left = randomNumX() + 'px';
  let posX = randomNumX();
  let posY = randomNumY();
  let id = setInterval(frame, 5);
  function frame() {
    //If logo reaches bottom of the page
    if (posY == bottomView) {
      posY--;
    } else {
      posY++;
      posX++;
      first.style.top = posY + 'px';
      first.style.left = posX + 'px';
    }

    //If logo reaches right border
    if (posX == rightView){
      clearInterval(id);
    }
    
  }
}



window.onload = function(){
  // randomPosition();
  move()
};

//assign random number to x position
//assign random number to y position