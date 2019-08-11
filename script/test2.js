let imgContainer = document.querySelectorAll(".imgContainer");

// document.addEventListener('mousemove', function(e){
//   let x = e.clientX;
//   let y = e.clientY;
//   for (i = 0; i < imgContainer.length; i++)
//   {
//     imgContainer[i].style.display = "block";
//     imgContainer[i].style.left = x + "px";
//     imgContainer[i].style.top = y + "px";
//   }
// });


let signs = ["+", "-"];
let sign;
function generateSign(){
sign = signs[Math.floor(Math.random()*signs.length)];
console.log(typeof "+");
return sign;
}
generateSign();

function randomPosition()
{
  for (i = 0; i < imgContainer.length; i++)
  {
    imgContainer[i].style.top = (Math.random()*374) + "px";
    imgContainer[i].style.left = (Math.random()*1150) + "px";
    imgContainer[i].style.display = "block";
  }
}
console.log(sign);
// let result = eval(5 + sign + 1);
let result = eval(`5 ${sign} 1`);
console.log(result);


// start game
// window.onload =( )=>{
//   randomPosition();
//   moveElement();
// }

let animate;

function moveElement(){
  function frame(){
    for (i = 0; i < imgContainer.length; i++)
    {
      // imgContainer[i].style.left = parseInt(imgContainer[i].style.left) + eval(`${generateSign} +1`) + "px";
      // imgContainer[i].style.top = parseInt(imgContainer[i].style.top) + eval(`${generateSign} +1`) + "px";

      imgContainer[i].style.left = parseInt(imgContainer[i].style.left) - 1 + "px";
      imgContainer[i].style.top = parseInt(imgContainer[i].style.top) - 1 + "px";
      console.log(sign);
    }
  }
  animate = setInterval(frame, 100);
}

function moveElement(){
  let xPos = generateSign();
  let yPos = generateSign();

  function frame(){
    for (i = 0; i < imgContainer.length; i++)
    {
      // imgContainer[i].style.left = parseInt(imgContainer[i].style.left) + eval(`${generateSign} +1`) + "px";
      // imgContainer[i].style.top = parseInt(imgContainer[i].style.top) + eval(`${generateSign} +1`) + "px";

      imgContainer[i].style.left = parseInt(imgContainer[i].style.left) - 1 + "px";
      imgContainer[i].style.top = parseInt(imgContainer[i].style.top) - 1 + "px";
      console.log(sign);
    }
  }
  animate = setInterval(frame, 100);
}

// // setInterval(moveElement, 1000);


// function moveElement(){
//   let pos = randomPosition();
  
//   let id = setInterval(frame,10);
//   function frame(){
//     // if(pos==350){
//     //   clearInterval(id);
//     // } else {
//       pos++;
//       for (i = 0; i < imgContainer.length; i++)
//       {
//         imgContainer[i].style.top = pos + "px";
//         imgContainer[i].style.left = pos + "px";
//       }
//     }
// }