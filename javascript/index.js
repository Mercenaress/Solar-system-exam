const planetURL = "https://majazocom.github.io/Data/solaris.json";
const planetsContainer = document.querySelector(".planet-wrapper");
const planetInfoContainer = document.querySelector(".planetary-info");
const searchButton = document.querySelector(".search-button");
let planetArray = [];
let pickedPlanet = [];

fetchPlanetaryList();

if (window.localStorage.length > 0)
getLocalStorage();

if (searchButton) {
    searchFunction();
}

function getLocalStorage() {
        let currentPlanet = JSON.parse(localStorage.getItem('planetInfo'));
        let planetInfoCard = document.createElement("article");
        planetInfoCard.className = 'planet-card';
        planetInfoCard.innerHTML = `
        <h2>${currentPlanet.name}</h2>
        <h3>${currentPlanet.latinName}</h3>
        <p>${currentPlanet.desc}</p>
        <section class="info-box-wrapper">
        <div>
        <h5>OMKRETS</h5>
        <p>${currentPlanet.circumference}km</p>
        </div>
        <div>
        <h5>KM FRÅN SOLEN</h5>
        <p>${currentPlanet.distance}km</p>
        </div>
        <div>
        <h5>MAX TEMPERATUR</h5>
        <p>${currentPlanet.temp.day}°C</p>
        </div>
        <div>
        <h5>MIN TEMPERATUR</h5>
        <p>${currentPlanet.temp.night}°C</p>
        </div>
        </section>
        <section class="moons">
        <h5>MÅNAR</h5>
        <p>${currentPlanet.moons.map((moon) => `${moon}`).join(",  ")}</p>
        </section>
        `;

    if (planetInfoContainer) {
        planetInfoContainer.appendChild(planetInfoCard);
    }
}

// Fetches the planet list from API and turns them into clickable articles 
function fetchPlanetaryList() {
    fetch(planetURL)
    .then(planetList => planetList.json())
    .then((planetList) => { 
        planetArray = planetList
        for(let i = 0; i < planetList.length; i++) {

            let spaceOrb = document.createElement("article");
            spaceOrb.className = `${planetList[i].name}`;
            
           if (planetsContainer) {
               planetsContainer.appendChild(spaceOrb);
           } 

           spaceOrb.addEventListener('click', () => {
               localStorage.setItem('planetInfo', JSON.stringify(planetList[i]));
               window.location.href = 'result.html';
           })
            
           console.log(planetList[i]);
        } 
    });
}

function searchFunction() {
    document.querySelector('.search-button').addEventListener('click', () => {
        let input = document.querySelector('.search-input').value 
        console.log(input);
        
        let index = planetArray.findIndex(planet => planet.name.toLowerCase() === input.toLowerCase())
        
        let searchResult = document.querySelector(".search-result");
        searchResult.innerHTML = '';

        try {
            localStorage.setItem('planetInfo', JSON.stringify(planetArray[index]));
            searchResult.innerHTML = `<a href="result.html">${planetArray[index].name}</a>`;
        } catch {
            searchResult.innerHTML = 'Hittade inga resultat';
        }
    })
}
