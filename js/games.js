fetch("data/games.json")

.then(response => response.json())

.then(games => {


const container =
document.getElementById("games");


games.forEach(game => {


container.innerHTML += `

<div class="card">

<img src="${game.thumbnail}">

<h2>${game.title}</h2>

<p>
${game.description}
</p>


<a href="play.html?game=${game.url}">
PLAY
</a>


</div>


`;


});


});
