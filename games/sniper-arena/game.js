const canvas =
document.getElementById("game");


const ctx =
canvas.getContext("2d");



canvas.width =
innerWidth;


canvas.height =
innerHeight;



document
.getElementById("start")
.onclick=()=>{


canvas.requestPointerLock();


document
.getElementById("start")
.style.display="none";


};



let x=0;
let y=0;



document.addEventListener(
"mousemove",
e=>{


if(document.pointerLockElement)
{

x += e.movementX;

y += e.movementY;


}

});



function loop(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="white";


ctx.font="30px Arial";


ctx.fillText(
"Mouse:",
50,
50
);


ctx.fillText(
x,
200,
50
);


ctx.fillText(
y,
200,
100
);



requestAnimationFrame(loop);


}


loop();
