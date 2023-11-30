const limite = 10
const url = 'https://api.api-onepiece.com/episodes/?_limit=5'
fetch(url)
.then(response => response.json())
.then(response => 
  {
    

for(i = 0; i <= 299; i++ ){
    let div = document.createElement('div')
    div.style.border = 'solid 3px black'
    div.style.borderRadius = '5px'
    div.style.marginBottom = '30px'
    div.style.padding = '10px'
    div.style.width = '90%'
    div.style.margin = 'auto'
    div.style.backgroundColor = "orange"
    document.body.appendChild(div)

    let id = document.createElement('p')
    id.textContent = response[i].id
    div.appendChild(id)
        console.log(response);
    let titre = document.createElement('p')
    titre.textContent = response[i].title
    div.appendChild(titre)

    let description = document.createElement('p')
    description.textContent = response[i].description
    div.appendChild(description)
  
  }

}
  )