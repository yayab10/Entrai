// Exercice 7 :

// Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre

let nombre
let somme = 0

nombre= parseInt(prompt("Donne un nombre"))
while (isNaN(nombre)){
    nombre= parseInt(prompt("donne un nombre"))
}
for( let i = 1; i <= nombre; i++){
    somme = somme + i
}

console.log(somme)
