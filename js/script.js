const grid =
document.getElementById(
"game-grid"
);


const search =
document.getElementById(
"search"
);


let category="All";



function showGames(){


grid.innerHTML="";



games
.filter(game=>{


let searchMatch =
game.title
.toLowerCase()
.includes(
search.value.toLowerCase()
);



let categoryMatch =
category==="All" ||
game.categories.includes(category);



return searchMatch &&
categoryMatch;


})


.forEach(game=>{


const card =
document.createElement(
"div"
);


card.className =
"game-card";



card.innerHTML = `

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


if(game.type==="external"){


window.open(
game.url,
"_blank"
);


}


else{


localStorage.setItem(
"selectedGame",
JSON.stringify(game)
);


window.location.href =
"game.html";


}



};



grid.appendChild(card);



});


}




search.addEventListener(
"input",
showGames
);



document
.querySelectorAll(
"#categories button"
)
.forEach(button=>{


button.onclick=()=>{


category =
button.dataset.category;


showGames();


};


});



showGames();
