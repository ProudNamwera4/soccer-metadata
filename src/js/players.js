import { loadHeaderFooter } from "./util.mjs";
let url = ``;
const leaguesDiv = document.querySelector("#players");
let searchBtn = document.querySelector("#searchBtn")
let playerName = "";
loadHeaderFooter(
  "./../public/partials/header.html",
  "./../public/partials/footer.html",
);



async function apiFetch(playerName) {
  let url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`;
  
     const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data.player);
      displayResults(data.player[0]) || console.log("Player not found, check name and try again") ;
    } else {
      throw Error(await response.text());
    }
 
}


const displayResults = (player) => {
  let card = document.createElement("section");
  let playerImage = document.createElement("img");

  let name = document.createElement("h3");
  name.innerText = `${player.strPlayer}`;
  let nationality = document.createElement("h4");
  nationality.textContent = `${player.strNationality}`;

  playerImage.setAttribute("src", player.strCutout);
  playerImage.setAttribute("alt", `picture of ${player.strPlayer}`);

  let position = document.createElement("h4");
  position.innerHTML = player.strPosition;

  let currentClub = document.createElement("h4");
  currentClub.innerHTML = player.strTeam;

  let description = document.createElement("p");
  description.innerHTML = player.strDescriptionEN;
  description.setAttribute("id", "playerDescription");

  card.setAttribute("class", "card");

  card.appendChild(name);
  card.appendChild(playerImage);
  card.appendChild(nationality);
  card.appendChild(currentClub);
  card.appendChild(position);
  card.appendChild(description);

  leaguesDiv.appendChild(card);
};


searchBtn.addEventListener("click", searchPlayer);
function searchPlayer() {
  leaguesDiv.innerHTML = '';
playerName = document
    .querySelector("#playerName")
    .value
    apiFetch(playerName);
}
