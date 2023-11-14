// Exercice 4 :

// Modifiez l’algorithme précedant pour que le programme affiche en quelle position avait été saisie ce nombre

let nombre
let max = 0
let positionmax

for( let i = 1; i <= 5; i++){
    nombre= parseInt(prompt("Donne moi 20 nombres"))
    console.log("le nombre n°",i," est : ",nombre) 
    if (!isNaN(nombre)){
            if (nombre > max){
            max = nombre
            positionmax = i
        }  
    }
}
console.log("le nombre n°",positionmax,"est le plus grand nombre que tu as donné est ",max)