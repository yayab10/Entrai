// Demander à l'utilisateur d'entrer un nombre
let nombre = prompt("Entrez un nombre :");

// Vérifier si le nombre est positif
if (nombre > 0) {
    // Générer une valeur aléatoire entre 1 et le nombre
    let valeurAleatoire = Math.floor(Math.random() * nombre) + 1;

    // Afficher la valeur aléatoire dans la console
    console.log("La valeur aléatoire est : " + valeurAleatoire);
} else {
    console.log("Le nombre doit être positif.");
}