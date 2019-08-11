let imgContainer = document.querySelectorAll(".imgContainer");
// let arrImgContainer;
// arrImgContainer = Array.from(imgContainer);
// console.log(arrImgContainer);
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



// generateSign();

function randomPosition()
{
  for (i = 0; i < imgContainer.length; i++)
  {
    imgContainer[i].style.top = (Math.random()*374) + "px";
    imgContainer[i].style.left = (Math.random()*1150) + "px";
    imgContainer[i].style.display = "block";
  }
}
// console.log(sign);
// let result = eval(5 + sign + 1);
// let result = eval(`5 ${sign} 1`);
// console.log(result);


// start game
window.onload =( )=>{
  randomPosition();
  moveElement();
}

let signs = ["+", "-"];
// let sign;
function generateSign(){
sign = signs[Math.floor(Math.random()*signs.length)];
return sign;
}

let animate;

//ORIGINAL -- -- -- -- -- -- -- -- -- -- -- -- -- 
// function moveElement(){
//   animate = setInterval(frame, 100);
//   function frame(){
//     for (i = 0; i < imgContainer.length; i++)
//     {
//       // arrImgContainer[i].style.left = parseInt(imgContainer[i].style.left) + eval(`${generateSign()} +1`) + "px";
//       // arrImgContainer[i].style.top = parseInt(imgContainer[i].style.top) + eval(`${generateSign()} +1`) + "px";

//       arrImgContainer[i].style.left = parseInt(imgContainer[i].style.left) - 1 + "px";
//       arrImgContainer[i].style.top = parseInt(imgContainer[i].style.top) - 1 + "px";
//       console.log(sign);
//     }
//   }
// }

// arrImgContainer[1].addEventListener("click", ()=>{
//   alert("jhello");
// })

// -- -- -- CLOSE -- -- -- 

// function moveElement(){
//   let arrImgContainer;
//   arrImgContainer = Array.from(imgContainer);
//   animate = setInterval(frame, 100);
//   function frame(){

    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.top = parseInt(arrImgContainer[0].style.top) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[1].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[1].style.top = parseInt(arrImgContainer[0].style.top) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + eval(`${generateSign()} +1`) + "px";
    
    
      // arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) - 1 + "px";
      // arrImgContainer[0].style.top = parseInt(arrImgContainer[1].style.top) - 1 + "px";
      // console.log(sign);
  //   }
  // }
  let FPS = 60;

  function randContainer(){
    let randContainerNum = Math.floor((Math.random() * 8) + 1);
     return randContainerNum;
  }

function moveElement(){
    let arrImgContainer;
    // console.log(randContainer());
  arrImgContainer = Array.from(imgContainer);
  for (let i = 0; i < imgContainer.length; i++){
    let exp = Math.floor((Math.random()*4)+1);
    let num = i;
    console.log(exp);
    console.log(num);
    switch (1){
      case 1:
        console.log("case1");
          let sign1 = generateSign();
          let sign2 = generateSign();
          function minusMinus(){
            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";
          }
          console.log(sign1);
          console.log(sign2);
          setInterval(minusMinus, 1000 / FPS);
      break;    
      // case 2:
      //     function minusPlus(){
      //       arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) - 1 + "px";
      //       arrImgContainer[0].style.top = parseInt(arrImgContainer[0].style.top) + 1 + "px";
      //     }
      //     setInterval(minusPlus, 100);
      // case 3:
      //     function plusPlus(){
      //       arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + 1 + "px";
      //       arrImgContainer[0].style.top = parseInt(arrImgContainer[0].style.top) + 1 + "px";
      //     }
      //     setInterval(plusPlus, 100);
      // case 4:
      //     function plusMinus(){
      //       arrImgContainer[0].style.left = parseInt(arrImgContainer[0].style.left) + 1 + "px";
      //       arrImgContainer[0].style.top = parseInt(arrImgContainer[0].style.top) - 1 + "px";
      //     }
      //     setInterval(plusMinus,100);
    }
  }
}
