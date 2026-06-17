const game =
JSON.parse(
localStorage.getItem(
"selectedGame"
)
);



if(game){


document.getElementById(
"title"
)
.textContent =
game.title;



document.getElementById(
"game-frame"
)
.src =
game.url;


}
