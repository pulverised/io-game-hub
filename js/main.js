const container =
document.getElementById("games");


const search =
document.getElementById("search");


let filter="All";



function loadGames(){


container.innerHTML="";


games
.filter(game=>{


let name =
game.title
.toLowerCase()
.includes(
search.value.toLowerCase()
);


let category =
filter==="All" ||
game.category===filter;


return name && category;


})

.forEach(game=>{


let card =
document.createElement("div");


card.className="card";


card.innerHTML=`

<img src="${game.image}">

<h2>
${game.title}
</h2>

<p>
${game.description}
</p>

<button>
Play
</button>

`;



card
.querySelector("button")
.onclick=()=>{


window.location.href =
"game.html?game="+game.url;


};



container.appendChild(card);


});


}



search.oninput =
loadGames;



document
.querySelectorAll("button")
.forEach(btn=>{


btn.onclick=()=>{


filter =
btn.dataset.category;


loadGames();


};


});



loadGames();
