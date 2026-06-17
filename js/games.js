console.log("games.js loaded");

let allGames = [];

const gameContainer = document.getElementById("gameContainer");
const searchInput = document.getElementById("searchInput");


async function loadGames(){

    try {

        const response = await fetch("./data/games.json");


        if(!response.ok){

            throw new Error(
                "Could not load games.json"
            );

        }


        allGames = await response.json();


        displayGames(allGames);


    }

    catch(error){

        console.error(error);

        gameContainer.innerHTML = `
            <div class="no-games">
                Failed to load games.
            </div>
        `;

    }

}



function displayGames(games){


    gameContainer.innerHTML = "";


    games.forEach(game => {


        const card = document.createElement("div");


        card.className = "game-card";


        card.innerHTML = `

        <img 
        src="${game.thumbnail}"
        alt="${game.title}"
        >


        <div class="game-content">


        <h3>
        ${game.title}
        </h3>


        <p>
        ${game.description}
        </p>


        <span class="category">
        ${game.category}
        </span>


        <a 
        class="play-button"
        href="play.html?game=${game.id}">
        PLAY NOW
        </a>


        </div>

        `;


        gameContainer.appendChild(card);


    });


}




searchInput.addEventListener(
"input",
()=>{


const value =
searchInput.value.toLowerCase();



const filtered =
allGames.filter(game =>

game.title
.toLowerCase()
.includes(value)

);



displayGames(filtered);



});





document
.querySelectorAll("[data-category]")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;



if(category === "all"){

displayGames(allGames);

return;

}



displayGames(

allGames.filter(
game =>
game.category === category
)

);



});



});



loadGames();
