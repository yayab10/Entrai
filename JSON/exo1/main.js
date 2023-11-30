// const superHeroes = {
//     "squadName" : "Super hero squad",
//     "homeTown" : "Metro City",
//     "formed" : 2016,
//     "secretBase" : "Super tower",
//     "active" : true,
//     "members" : [
//       {
//         "name" : "Molecule Man",
//         "age" : 29,
//         "secretIdentity" : "Dan Jukes",
//         "powers" : [
//           "Radiation resistance",
//           "Turning tiny",
//           "Radiation blast"
//         ]
//       },
//       {
//         "name" : "Madame Uppercut",
//         "age" : 39,
//         "secretIdentity" : "Jane Wilson",
//         "powers" : [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name" : "Eternal Flame",
//         "age" : 1000000,
//         "secretIdentity" : "Unknown",
//         "powers" : [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }
//   console.log(superHeroes.members[0].powers[1]);

const urlCat = 'https://api.thecatapi.com/v1/images/search'
const urlDog = 'https://dog.ceo/api/breeds/image/random'
fetch(urlDog)
.then(response => response.json())
.then(response => 
  {
  console.log(response)
  const img = document.querySelector('.image')
  img.src = response.message}
  )