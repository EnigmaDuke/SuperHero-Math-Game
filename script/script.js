
let soundOff = document.querySelector("#soundOff");
let soundOn = document.querySelector("#soundOn");
// let timer = document.querySelector("#time");


soundOn.addEventListener("click", ()=>{
  soundOn.style.display = "none";
  soundOff.style.display = "inline-block";
});

soundOff.addEventListener("click", function(){
  soundOn.style.display = "inline-block";
  soundOff.style.display = "none";
});

// soundOff.classList.toggle("soundOffOn");

let marvelLogo = document.querySelector("#marvelLogo");
let dcLogo = document.querySelector("#dcLogo");
let dcHeroes = document.querySelector("#dcHeroes");
let marvelHeroes = document.querySelector("#marvelHeroes");
let marvelVillains = document.querySelector("marvelVillains");

// Audio
let vid = document.querySelector("#batmanAud");
let wasClicked = false;

soundOff.addEventListener("click", ()=>{
  vid.play();

});

soundOn.addEventListener("click", ()=>{
  vid.pause();
  wasClicked = true;
  return wasClicked;
});

// Logos 

marvelLogo.addEventListener("click", ()=>{
  marvelLogo.style.display = "none";
  dcLogo.style.display = "block";
  dcHeroes.style.display = "none";
  marvelHeroes.style.display = "grid";

  if (wasClicked == true){
    vid.pause();
    vid = document.querySelector("#spideyAud");
    vid.load();
  } else{
    vid.pause();
    vid = document.querySelector("#spideyAud");
    vid.load();
    vid.play();
  }
});

dcLogo.addEventListener("click", ()=>{
  dcLogo.style.display = "none";
  marvelLogo.style.display = "block";
  marvelHeroes.style.display = "none";
  dcHeroes.style.display = "grid";
  if (wasClicked == true){
    vid.pause();
    vid.load();
    vid = document.querySelector("#batmanAud");
  } else{
    vid.pause();
    vid = document.querySelector("#batmanAud");
    vid.load();
    vid.play();
  }
  // vid.pause();
  // vid = document.querySelector("#batmanAud");
  // vid.load();
  // vid.play();
});

//play music on load
// window.onload = function (){
//   vid.play();
// }

//keypress "M " to mute


//Index.css Dark Mode
let darkMode = document.querySelector("#dark");

darkMode.addEventListener("click", ()=>{
  document.querySelector("#pageStyle").setAttribute("href", "css/indexDark.css");
  dcVillains.style.display = "block";
  dcVillains.style.display = "grid";
  // dcHeroes.style.display = "none";
  marvelHeroes.style.display = "none";
  marvelHeroes.style.display = "none";

  vid.pause();
  vid = document.querySelector("#villainAud");
  vid.loads();
  vid.play();
})

//Index.css Day Mode
let dayMode = document.querySelector("#light");
dayMode.addEventListener("click", ()=>{
  document.querySelector("#pageStyle").setAttribute("href", "css/index.css");
  dcHeroes.style.display = "block";
  dcHeroes.style.display = "grid";
  marvelHeroes.style.display = "none";
  marvelHeroes.style.display = "none";
  dcVillains.style.display = "none"
  vid.pause();
  vid = document.querySelector("#batmanAud");
  vid.loads();
  vid.play();
});

//when hovered darkseid says darkseid;

let start = document.querySelector("#start");
let rules = document.querySelector("#rules");
let darseid = document.querySelector("#darkseid");
let seid = document.querySelector("#seid");

start.addEventListener("mouseover", ()=>{
    darseid.style.opacity = 1;
    seid.style.backgroundColor = yellow;
});

let userInfo = document.querySelector("#userInfo");
let gameRules = document.querySelector("#gameRules");

let close = document.querySelector(".close");

start.addEventListener("click", ()=>{
  userInfo.style.display = "block";
});

rules.addEventListener("click", ()=>{
  gameRules.style.display = "block";
});

close.addEventListener("click", ()=>{
  userInfo.style.display = "none";
  // gameRules.style.display = "none";
});

window.addEventListener("click", (event)=>{
  if (event.target == userInfo || event.target == gameRules){
    userInfo.style.display = "none";
    gameRules.style.display = "none";
  }
});

//Levels

let levelOne = document.querySelector("#levelOne");
let levelTwo = document.querySelector("#levelTwo");
let levelThree = document.querySelector("#levelThree");

