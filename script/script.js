
// --- --- audio --- --- 

//play music on load
let soundOff = document.querySelector("#soundOff");
let soundOn = document.querySelector("#soundOn");
let vid = document.querySelector("#batmanAud");
let darkMode = document.querySelector("#dark");
let gameDark = false;
let wasClicked = false;
//1 = dc 2 = marvel
let gameState = 1;

window.onload = function (){
  var promise = document.querySelector('#batmanAud').play();
  if (promise !== undefined) {
    promise.then(_ => {
        promise.play();
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
}
}

console.log("Dark mode " + gameDark);
console.log("dc 1, marvel 2 " + gameState);

soundOn.addEventListener("click", ()=>{
  soundOn.style.display = "none";
  soundOff.style.display = "inline-block";
  vid.play();
  wasClicked = false;
  return wasClicked;
});

soundOff.addEventListener("click", function(){
  soundOn.style.display = "inline-block";
  soundOff.style.display = "none";
  vid.pause();
  wasClicked = true;
  return wasClicked;
});

// soundOff.classList.toggle("soundOffOn");

// -- --  Character logos -- -- 

let marvelLogo = document.querySelector("#marvelLogo");
let dcLogo = document.querySelector("#dcLogo");
let dcHeroes = document.querySelector("#dcHeroes");
let marvelHeroes = document.querySelector("#marvelHeroes");
let marvelVillains = document.querySelector("#marvelVillains");

// Logos 

marvelLogo.addEventListener("click", ()=>{
  gameState = 2;
  console.log("Dark mode " + gameDark);
  console.log("dc 1, marvel 2 " + gameState);
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

  if (gameDark == true){
    dcLogo.style.display = "block";
    marvelVillains.style.display = "grid";
    dcVillains.style.display = "none";
    marvelHeroes.style.display = "none";
    dcHeroes.style.display = "none";
    vid.pause();
    vid = document.querySelector("#marvelVillainAud");
    vid.load();
    vid.play();
  } else{
    vid.pause();
    vid = document.querySelector("#marvelVillainAud");
    vid.load();
    vid.play();
  }


  return gameState;
});

dcLogo.addEventListener("click", ()=>{
  gameState = 1;
  console.log("Dark mode " + gameDark);
  console.log("dc 1, marvel 2 " + gameState);
  dcLogo.style.display = "none";
  marvelLogo.style.display = "block";
  marvelHeroes.style.display = "none";
  dcHeroes.style.display = "grid";

  if (wasClicked == true){
    vid.pause();
    vid = document.querySelector("#batmanAud");
    vid.load();
  } else{
    // vid.pause();
    vid.load();
    vid = document.querySelector("#batmanAud");
    vid.play();
  }

  if (gameDark == true){
    dcLogo.style.display = "none";
    marvelVillains.style.display = "none";
    dcVillains.style.display = "grid";
    marvelHeroes.style.display = "none";
    dcHeroes.style.display = "none";
    vid.pause();
    vid = document.querySelector("#villainAud");
    vid.load();
    vid.play();
  } else{
    vid.pause();
    vid = document.querySelector("#villainAud");
    vid.load();
    vid.play();
  }
  // vid.pause();
  // vid = document.querySelector("#batmanAud");
  // vid.load();
  // vid.play();
});


//Index.css Dark Mode

darkMode.addEventListener("click", ()=>{
  gameDark = true;
  console.log("Dark mode " + gameDark);
  console.log("dc 1, marvel 2 " + gameState);
  document.querySelector("#pageStyle").setAttribute("href", "css/indexDark.css");
  if (gameState == 1){
    // dcVillains.style.display = "block";
    dcVillains.style.display = "grid";
    // dcHeroes.style.display = "none";
    marvelHeroes.style.display = "none";
    marvelHeroes.style.display = "none";
    vid.pause();
    vid.load();
    vid = document.querySelector("#villainAud");
    vid.play();

  } else if (gameState == 2){
    // marvelVillains.style.display = "block";
    marvelVillains.style.display = "grid";
    // dcHeroes.style.display = "none";
    marvelHeroes.style.display = "none";
    marvelHeroes.style.display = "none";
    vid.pause();
    vid.load();
    vid = document.querySelector("#marvelVillainAud");
    vid.play();
  }
return gameDark;
})

//Index.css Day Mode
let dayMode = document.querySelector("#light");

dayMode.addEventListener("click", ()=>{
  gameDark = false;
  document.querySelector("#pageStyle").setAttribute("href", "css/index.css");
  dcHeroes.style.display = "block";
  dcHeroes.style.display = "grid";
  marvelHeroes.style.display = "none";
  marvelHeroes.style.display = "none";
  dcVillains.style.display = "none"
  vid.pause();
  vid.load();
  vid = document.querySelector("#batmanAud");
  vid.play();
});

let start = document.querySelector("#start");
let rules = document.querySelector("#rules");
let darseid = document.querySelector("#darkseid");
let seid = document.querySelector("#seid");

start.addEventListener("mouseover", ()=>{
    darseid.style.opacity = 1;
});

start.addEventListener("click", ()=>{
  window.location.href = "game.html";
});

let gameRules = document.querySelector("#gameRules");

let close = document.querySelector(".close");

rules.addEventListener("click", ()=>{
  gameRules.style.display = "block";
});

close.addEventListener("click", ()=>{
  gameRules.style.display = "none";
});

window.addEventListener("click", (event)=>{
  if (event.target == gameRules){
    gameRules.style.display = "none";
  }
});


// window.addEventListener("click", (event)=>{
//   if (event.target == userInfo || event.target == gameRules){
//     userInfo.style.display = "none";
//     gameRules.style.display = "none";
//   }
// });

