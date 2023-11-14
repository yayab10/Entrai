// Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.

let nombre = 0
while ( nombre < 1 || nombre > 3){
    nombre = prompt("Donne un nombre entre 1 et 3")
    if (nombre >= 1 && nombre <= 3){
        console.log("bien joué")
    }
    else{
        console.log("kestu fait le sang")
    }
}