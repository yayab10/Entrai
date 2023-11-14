// Exercice 5 : 

// Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro. (reprends l'exercice 3) 

let nombre
let max = 0

nombre= parseInt(prompt("Donne un nombre"))

while (nombre != 0) { 
    while(isNaN(nombre)){
        console.log("ceci n'est pas un nombre")
        nombre= parseInt(prompt("Donne un nombre"))
    } 
    if (nombre > max){
        max = nombre
    } 
    nombre= parseInt(prompt("Donne un nombre")) 
}
    
console.log("le plus grand nombre que tu as donné est ",max)