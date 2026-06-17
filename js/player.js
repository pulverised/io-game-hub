let games = [];


// Load game database

fetch("data/games.json")

.then(response => response.json())

.then(data => {


games = data;


loadGame();


});




// Get game from URL


function loadGame(){


const params =
new URLSearchParams(window.location.search);


const gameID =
params.get("game");



const game =
games.find(
item => item.id === gameID
);



if(!game){

document.getElementById("gameTitle")
.innerText =
"Game Not Found";


return;

}




document.title =
game.title + " - IO Game Hub";



document.getElementById("gameTitle")
.innerText =
game.title;



document.getElementById("infoTitle")
.innerText =
game.title;



document.getElementById("infoDescription")
.innerText =
game.description;



const iframe =
document.getElementById("gameFrame");



iframe.src =
game.url;



saveRecent(game);


}




// Save recently played games


function saveRecent(game){


let recent =
JSON.parse(
localStorage.getItem("recentGames")
)
||
[];



recent =
recent.filter(
item => item.id !== game.id
);



recent.unshift(game);



recent =
recent.slice(0,5);



localStorage.setItem(
"recentGames",
JSON.stringify(recent)
);



}





// Fullscreen button


document
.getElementById("fullscreenButton")
.addEventListener(
"click",
()=>{


const frame =
document.getElementById("gameFrame");



if(frame.requestFullscreen){

frame.requestFullscreen();

}


}

);
