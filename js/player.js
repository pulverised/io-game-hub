const params =
new URLSearchParams(
window.location.search
);



const game =
params.get("game");



const frame =
document.getElementById("game");



frame.src =
game;



document
.getElementById("fullscreen")
.onclick=()=>{


frame.requestFullscreen();


};
