const grid =
document.getElementById("game-grid");


const search =
document.getElementById("search");


let activeCategory="All";



function displayGames(){

    grid.innerHTML="";


    let filtered =
    games.filter(game=>{


        let matchesSearch =
        game.title
        .toLowerCase()
        .includes(
            search.value.toLowerCase()
        );


        let matchesCategory =
        activeCategory==="All" ||
        game.categories.includes(activeCategory);


        return matchesSearch &&
        matchesCategory;

    });



    filtered.forEach(game=>{


        let card=document.createElement("div");


        card.className="game-card";


        card.innerHTML=`

        <img src="${game.image}">

        <h2>
        ${game.title}
        </h2>

        <p>
        ${game.description}
        </p>

        <button>
        Play Now
        </button>

        `;



        card.querySelector("button")
        .onclick=()=>{

            localStorage.setItem(
                "selectedGame",
                JSON.stringify(game)
            );


            window.location.href="game.html";

        };


        grid.appendChild(card);

    });

}



search.addEventListener(
"input",
displayGames
);



document
.querySelectorAll(
"#categories button"
)
.forEach(button=>{


button.onclick=()=>{

    activeCategory=
    button.dataset.category;

    displayGames();

};


});



displayGames();
