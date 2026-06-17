const game =
JSON.parse(
localStorage.getItem("selectedGame")
);



const iframe =
document.getElementById(
"game-frame"
);


const title =
document.getElementById(
"title"
);



const overlay =
document.getElementById(
"mouse-overlay"
);



if(game){


title.textContent =
game.title;


iframe.src =
game.url;


}





// Click to lock mouse

overlay.addEventListener(
"click",
()=>{


    iframe.focus();


    // Request pointer lock

    document.body.requestPointerLock();


    overlay.style.display="none";


});





// Detect mouse unlock

document.addEventListener(
"pointerlockchange",
()=>{


if(
document.pointerLockElement === null
)

{


overlay.style.display="flex";


}


});





// Press ESC unlocks mouse normally

document.addEventListener(
"keydown",
(event)=>{


if(event.key==="Escape")
{

overlay.style.display="flex";

}


});
