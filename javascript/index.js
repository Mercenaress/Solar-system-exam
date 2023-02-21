const planetURL = "https://majazocom.github.io/Data/solaris.json";
let planetCard = document.querySelector(".planet-wrapper");

function fetchPlanetaryList() {
    fetch(planetURL)
    .then(planetList => planetList.json())
    .then((planetList) => {
         for(let i = 0; i < planetList.length; i++) {

            let spaceOrb = document.createElement("article")
            spaceOrb.className = `${planetList[i].name}`;
            spaceOrb.innerHTML = (`
            <h2>${planetList[i].name}</h2>
            `)

            planetCard.appendChild(spaceOrb);

             console.log(planetList[i]);
         } 
        });
    }
    
    fetchPlanetaryList();
    