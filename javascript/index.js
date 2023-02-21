const planetURL = "https://majazocom.github.io/Data/solaris.json";
let planetCard = document.querySelector(".planet-wrapper");
let planetArray = [];

fetchPlanetaryList();

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
            
            
            planetCard.appendChild(spaceOrb);
            
            function infoPageRedirect() {
                spaceOrb.addEventListener('click', () => {
                    console.log(`${planetList[i].name}`);
                    // window.location.href = 'result.html';
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

    console.log(index);
})
    
