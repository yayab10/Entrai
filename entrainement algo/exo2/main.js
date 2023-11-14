// Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10. 

let nombre = 0
while ( nombre < 10 || nombre > 20){
    nombre = prompt("Donne un nombre entre 10 et 20")
    if (nombre >= 10 && nombre <= 20){
        console.log("bien joué")
    }
    if (nombre < 10) {
        console.log("augmenter le sang")
    }
    if (nombre > 20){
        console.log("dose chakal dose")
    }
    if (isNaN(nombre)){
        console.log("abuse pas toi aussi")
        nombre = 0
    }
}