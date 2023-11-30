document.addEventListener('DOMContentLoaded', function(){
    const personnagesBtn = document.getElementById('personnagesBtn')
    const residentsBtn = document.getElementById('residentsBtn')
    const episodesBtn = document.getElementById('episodesBtn')
    
    const personnagesSection = document.getElementById('personnagesSection')
    const residentsSection = document.getElementById('residentsSection')
    const episodesSection = document.getElementById('episodesSection')

    personnagesBtn.addEventListener('click', () =>{
        // fetchData('character', 3)
        // getAllPages(apiUrl)
        // paginated_fetch(url, page, )
    })
    residentsBtn.addEventListener('click', () => {
        fetchData('location', 3)
    })
    episodesBtn.addEventListener('click', () => {
        fetchData('episode', 3)
    })
   

    // function fetchData(type, page){
    //     const url = `https://rickandmortyapi.com/api/${type}/?page=${page}`
        
    //     fetch(url)
    //     .then(r => r.json())
    //     .then(r => {
    //         console.log(r);
    //     })
    // }

    // // async function fetchAllData()
    // async function getAllPages(apiUrl) {
    //     let allResults = [];
    //     let nextPage = apiUrl;
      
    //     while (nextPage) {
    //       // Faites la requête pour la page actuelle
    //       const response = await fetch(nextPage);
    //       const data = await response.json();
      
    //       // Concaténez les résultats de la page actuelle
    //       allResults = allResults.concat(data.results);
      
    //       // Mettez à jour la variable nextPage pour la prochaine itération
    //       nextPage = data.next;
    //     }
      
    //     return allResults;
    //   }
      
    //   // Exemple d'utilisation
    //   const apiUrl = "https://rickandmortyapi.com/api/"; // Remplacez cela par l'URL réelle de votre API
    //   getAllPages(apiUrl)
    //     .then(results => {
    //       console.log("Résultats de toutes les pages:", results);
    //     })
    //     .catch(error => {
    //       console.error("Erreur lors de la récupération des données:", error);
    //     });
      

    function paginated_fetch(
      url = "https://rickandmortyapi.com/api/", // Improvised required argument in JS
      // page = 1,
      previousResponse = []
    ) {
      return fetch(`${url}`) // Append the page number to the base URL
        .then(response => response.json())
        .then(newResponse => {
          const response = [...previousResponse, ...newResponse]; // Combine the two arrays
    
          if (newResponse.length !== 0) {
            page++;
    
            return paginated_fetch(url, page, response);
          }
    
          console.log(response);
          return response;
        });
    }
    // paginated_fetch('https:rickandmortyapi.com/api/')
})