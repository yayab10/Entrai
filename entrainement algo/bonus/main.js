// Exercice bonus :

// Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge. Le tarif dépend de la situation du conducteur :
// un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.
// un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.
// un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà
// De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus de cinq ans. Ainsi, s'il satisfait à cette exigence, un client normalement "vert" devient "bleu", un client normalement "orange" devient "vert", et le "rouge" devient orange.
// Ecrire l'algorithme permettant de saisir les données nécessaires (sans contrôle de saisie) et de traiter ce problème. Avant de se lancer à corps perdu dans cet exercice, on pourra réfléchir un peu et s'apercevoir qu'il est plus simple qu'il n'en a l'air (cela s'appelle faire une analyse !)

let age 
let permis 
let accident
let fidelite
let point = 0

// Demande des information

function Info() {
    age = parseInt(prompt("Quel age as-tu?"))
    while (isNaN(age) || age < 0){
        console.log("ceci est incorect")
        age = parseInt(prompt("Quel age as-tu?"))
    }
    console.log("Tu as ", age," ans.")    
    
    permis = parseInt(prompt("Depuis combien de temps as-tu le permis?"))
    while (isNaN(permis) || permis < 0){
        console.log("ceci est incorect")
        permis = parseInt(prompt("Depuis combien de temps as-tu le permis?"))
    }
    console.log("Tu as le permis depuis ", permis," ans.")

    accident = parseInt(prompt("Combien d'accident as-tu provoqué?"))
    while (isNaN(accident) || accident < 0){
        console.log("ceci est incorect")
        accident = parseInt(prompt("Combien d'accident as-tu provoqué?"))
    }
    console.log("Tu as fais ", accident," accident.")
    
    fidelite = parseInt(prompt("Depuis combien de temps es-tu rentré dans la maison?"))
    while (isNaN(fidelite) || fidelite < 0){
        console.log("ceci est incorect")
        fidelite = parseInt(prompt("Depuis combien de temps es-tu rentré dans la maison?"))
    }
    console.log("Tu as ", fidelite," ans de fidélité.")
    return age, permis, accident, fidelite
}

// Affection de POINT pour calcule du TARIF

function AffecPoint (age, permis, accident, fidelite){
    if (age > 24){
        point = point +1
        console.log(point)   
    } else {
        console.log(point)
    }

    if (permis > 1){
        point = point +1
        console.log(point)
    } else {
        console.log(point)
    }

    if (accident > 0){
        point = point - accident
        console.log(point)
    } else {
        console.log(point)
    }

    if (fidelite > 5){
        point = point +1
        console.log(point)
    } else {
        console.log(point)
    }

    console.log("nombre de point finale = ",point)
    return point
}

// Affectation du TARIF

function AffecTarif (point) {
    
    if (point < 0){
        console.log("smehli la bete t'es trop dangerous")
    }

    else if (point == 0){
        console.log("tarif rouge")
    }

    else if (point == 1){
        console.log("tarif orange")
    }

    else if (point == 2){
        console.log("tarif vert")
    }

    else if (point >= 3){
        console.log("tarif bleu")
    }
} 

Info()

AffecPoint (age, permis, accident, fidelite)

AffecTarif (point)
