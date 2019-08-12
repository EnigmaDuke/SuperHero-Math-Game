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
// window.onload =( )=>{
//   randomPosition();
//   moveElement();
// }

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
  


let parent = document.querySelector("main");
let dir = 1;
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
            arrImgContainer[1].style.left = parseInt(arrImgContainer[1].style.left) + eval(`${sign1} +1`) + "px";
            console.log(arrImgContainer[1].style.left);

            arrImgContainer[1].style.top = parseInt(arrImgContainer[1].style.top) + eval(`${sign2} +1`) + "px";

            if (arrImgContainer[1].left < 100+"px" || arrImgContainer[1].left == 1030+"px") {
              clearInterval(minusMinus);
            }
          }
          console.log(sign1);
          console.log(sign2);
          setInterval(minusMinus, 1000);
      break;    
    }
  }
}
