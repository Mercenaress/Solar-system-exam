const planetURL = "https://majazocom.github.io/Data/solaris.json";
let planetContainer = document.querySelector(".planet-wrapper");
let planetInformationCard = document.querySelector(".planetary-info")
let planetArray = [];

getLocalStorage();
fetchPlanetaryList();

function getLocalStorage() {
    let currentPlanet = JSON.parse(localStorage.getItem('planetInfo'));
}

// Fetches the planet list from API and turns them into clickable articles 
function fetchPlanetaryList() {
    fetch(planetURL)
    .then(planetList => planetList.json())
    .then((planetList) => {
        planetArray = planetList
        for(let i = 0; i < planetList.length; i++) {
            
            let spaceOrb = document.createElement("article")
            spaceOrb.className = `${planetList[i].name}`;
            spaceOrb.innerHTML = (`
            <h2>${planetList[i].name}</h2>
            `)
            
            planetContainer.appendChild(spaceOrb);

            // Makes the planets clickable and redirects to the next page
            function infoPageRedirect() {
                spaceOrb.addEventListener('click', () => {
                    console.log(`${planetList[i].name}`);
                    localStorage.setItem('planetInfo', JSON.stringify(planetList[i]));
                    window.location.href = 'result.html';
                })
            }
            infoPageRedirect();


             console.log(planetList[i]);
         } 
        });
    }

document.querySelector('.search-button').addEventListener('click', () => {
    let input = document.querySelector('.search-input').value 
    console.log(input);

    let index = planetArray.findIndex(planet => planet.name.toLowerCase() === input.toLowerCase())
    localStorage.setItem('planetInfo', JSON.stringify(planetArray[index]));
    console.log(index);
})

  
