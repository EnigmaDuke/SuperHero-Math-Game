
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
let marvelVillains = document.querySelector("marvelVillains");

// Audio
let soundOn = document.querySelector("#soundOn");
let soundOff = document.querySelector("#soundOff");
let vid = document.querySelector("#batmanAud");
let wasClicked = false;

soundOn.addEventListener("click", ()=>{
  vid.play();
});

soundOff.addEventListener("click", ()=>{
  vid.pause();
  wasClicked = true;
});

marvelLogo.addEventListener("click", ()=>{
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
  marvelHeroes.style.display = "none";
  marvelHeroes.style.display = "none";
  vid.pause();
  vid = document.querySelector("#villainAud");
  vid.loads();
  vid.play();
})

//when hovered darkseid says darkseid;

let start = document.querySelector("#start");
let darseid = document.querySelector("#darkseid");
let seid = document.querySelector("#seid");

start.addEventListener("mouseover", ()=>{
    darseid.style.opacity = 1;
    seid.style.backgroundColor = yellow;
})