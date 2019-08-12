let imgContainer = document.querySelectorAll(".imgContainer");

function randomPosition()
{
  for (i = 0; i < imgContainer.length; i++)
  {
    imgContainer[i].style.top = (Math.random()*374) + "px";
    imgContainer[i].style.left = (Math.random()*1150) + "px";
    imgContainer[i].style.display = "block";
  }
}

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

let FPS = 60;

  function randContainer(){
    let randContainerNum = Math.floor((Math.random() * 8) + 1);
     return randContainerNum;
  }
  
  var posX;
  var posY;


let parent = document.querySelector("main");
let dir = 1;
function moveElement(){
    let arrImgContainer;
    // console.log(randContainer());
  arrImgContainer = Array.from(imgContainer);
  for (let i = 0; i < imgContainer.length; i++){
    let exp = Math.floor((Math.random()*4)+1);
    let num = i;
    posX = parseInt(arrImgContainer[0].style.left.replace(/px$/, '')) || 0;
    posY = parseInt(arrImgContainer[0].style.top.replace(/px$/, '')) || 0;
    console.log(posX);
    console.log(exp);
    console.log(num);
    switch (1){
      case 1:
        console.log("case1");
          // let sign1 = generateSign();
          // let sign2 = generateSign();
          function minusMinus(){
            
            posX += dir;
            console.log(posX);
            posY += dir;

            // posX += eval(`${sign1} +1`);
            // posY += eval(`${sign2} +1`);

            // arrImgContainer[1].style.left = parseInt(arrImgContainer[1].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[1].style.top = parseInt(arrImgContainer[1].style.top) + eval(`${sign2} +1`) + "px";
            // console.log(arrImgContainer[1]);
            // console.log(parent.offsetWidth);

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            // arrImgContainer[num].style.left = parseInt(arrImgContainer[num].style.left) + eval(`${sign1} +1`) + "px";
            // arrImgContainer[num].style.top = parseInt(arrImgContainer[num].style.top) + eval(`${sign2} +1`) + "px";

            if (arrImgContainer[1].offsetHeight == window.offHeight) {
              alert("i hit the wall")
            }
          }
          // console.log(sign1);
          // console.log(sign2);
          setInterval(minusMinus, 1000);
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
