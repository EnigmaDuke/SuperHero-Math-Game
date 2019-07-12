
// let soundOff = document.querySelector("#soundOff");
// let soundOn = document.querySelector("#soundOn");
// let timer = document.querySelector("#time");


// soundOn.addEventListener("click", function(){
//   soundOn.style.display = "none";
//   soundOff.style.display = "inline-block";
// });

// soundOff.addEventListener("click", function(){
//   soundOn.style.display = "block";
//   soundOff.style.display = "none";
// });



// soundOff.classList.toggle("soundOffOn");

let marvelLogo = document.querySelector("#marvelLogo");
let dcLogo = document.querySelector("#dcLogo");
let dcHeroes = document.querySelector("#dcHeroes");
let marvelHeroes = document.querySelector("#marvelHeroes");

// Audio
let soundOn = document.querySelector("#soundOn");
let soundOff = document.querySelector("#soundOff");
let vid = document.querySelector("#batmanAud");
let wasClicked = false;

soundOn.addEventListener("click", function(){
  vid.play();
});

soundOff.addEventListener("click", function(){
  vid.pause();
  wasClicked = true;
});

marvelLogo.addEventListener("click", function(){
  marvelLogo.style.display = "none";
  dcLogo.style.display = "block";
  dcHeroes.style.display = "none";
  marvelHeroes.style.display = "grid";
  if (wasClicked == true){
    vid.pause();
    vid.load();
    vid = document.querySelector("#spideyAud");
  } else{
    vid.pause();
    vid = document.querySelector("#spideyAud");
    vid.load();
    vid.play();
  }
});

dcLogo.addEventListener("click", function(){
  dcLogo.style.display = "none";
  marvelLogo.style.display = "block";
  marvelHeroes.style.display = "none";
  dcHeroes.style.display = "grid";
  vid.pause();
  vid = document.querySelector("#batmanAud");
  vid.load();
  vid.play();
});


//play music on load
// window.onload = function (){
//   vid.play();
// }

//keypress "M " to mute