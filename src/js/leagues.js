const url = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
const leaguesDiv = document.querySelector("#leagues");
import { loadHeaderFooter } from "./util.mjs";

loadHeaderFooter("../../public/partials/header.html","../../public/partials/footer.html");

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
           displayResults(data.leagues);
           //console.log(data.leagues)
        }else{
        throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}
apiFetch();


const displayResults = (leagues) => {
    leagues.forEach(league => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let alternate = document.createElement("h4");

        name.innerText= `${league.strLeague}` ;
        alternate.textContent =`${league.strLeagueAlternate}`;
     
        card.setAttribute("class","card");
        
        card.appendChild(name)
        card.appendChild(alternate);
        
        leaguesDiv.appendChild(card);
    });
  
}