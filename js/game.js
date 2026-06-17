const game =
JSON.parse(
localStorage.getItem(
"selectedGame"
)
);



const frame =
document.getElementById(
"game-frame"
);



const title =
document.getElementById(
"title"
);



if(game){


title.textContent =
game.title;



frame.src =
game.url;


}
