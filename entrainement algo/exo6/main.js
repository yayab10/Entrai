// Exercice 6 :

// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre (de 1 à 10)

let nombre
let tableDeMultiplication = []

nombre= parseInt(prompt("donne un nombre"))
while (isNaN(nombre)){
    nombre= parseInt(prompt("donne un nombre"))
}
tableDeMultiplication = [nombre, nombre*2, nombre*3, nombre*4, nombre*5, nombre*6, nombre*7, nombre*8, nombre*9,nombre*10]
console.log(tableDeMultiplication)
