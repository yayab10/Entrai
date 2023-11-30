
const charactersBtn = document.getElementById('charactersBtn')
const locationsBtn = document.getElementById('locationsBtn')
const episodesBtn = document.getElementById('episodesBtn')

const charactersSection = document.getElementById('charactersSection')
const locationsSection = document.getElementById('locationsSection')
const episodesSection = document.getElementById('episodesSection')

async function fetchRickAndMortyData(category) {
    const baseUrl = `https://rickandmortyapi.com/api/${category}`;
    let url = baseUrl;
    let allData = [];
    let nextPage = true;

    while(nextPage) {
        const response = await fetch(url);
        const data = await response.json();
        allData = allData.concat(data.results);
        
        if (data.info.next) {
            url = data.info.next;
        } else {
            nextPage = false;
        }
    }

    return allData;     
}


// Fetch episodes


// AFFICHAGE DES ELEMENTS DANS LES SECTIONS



// AJOUT D'EVENEMENTS

charactersBtn.addEventListener('click', () => {
    fetchRickAndMortyData("character").then(characters => {
        characters.forEach((character) => {
            let li = document.createElement('li')
            li.textContent = character.name
            let img = document.createElement('img')
            img.src = character.image
            charactersSection.appendChild(li)
            charactersSection.appendChild(img)
        })
    })
    charactersSection.style.display = 'block'
    episodesSection.style.display = 'none'
    locationsSection.style.display = 'none'
})
locationsBtn.addEventListener('click', () => {
    fetchRickAndMortyData("location").then(locations => {
        locations.forEach((location) => {
            let nom = document.createElement('h3')
            nom.textContent = location.name
            let dimension = document.createElement('p')
            dimension.textContent = location.dimension
            let resident = document.createElement('p')
            // resident.textContent = location.residents
            location.residents.forEach((nomResident) => {
                fetch(nomResident)
                .then(response => response.json())
                .then(response => {
                    let monResident = document.createElement('li')
                    monResident.textContent = response.name
                    resident.appendChild(monResident)
                    console.log(response.name);

                })
            })
            locationsSection.appendChild(nom)
            locationsSection.appendChild(dimension)
            locationsSection.appendChild(resident)
            console.log(location.residents);
        })
    });
    locationsSection.style.display = 'block'
    charactersSection.style.display = 'none'
    episodesSection.style.display = 'none'
})

episodesBtn.addEventListener('click', () => {
    fetchRickAndMortyData("episode").then(episodes => {
        episodes.forEach((episode) => {
            let name = document.createElement('h3')
            name.textContent = episode.name
            let numero = document.createElement('p')
            numero.textContent = episode.episode
            let date = document.createElement('p')
            date.textContent = episode.air_date
            let bar = document.createElement('br')
            episodesSection.appendChild(name)
            episodesSection.appendChild(numero)
            episodesSection.appendChild(date)
            episodesSection.appendChild(bar)
        })
    }).catch(error => {
        console.error("Error fetching episodes", error);
    });
    episodesSection.style.display = 'block'
    charactersSection.style.display = 'none'
    locationsSection.style.display = 'none'
})
