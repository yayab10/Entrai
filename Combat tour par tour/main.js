let blockJeu = document.querySelector("#blockJeu")
blockJeu.style.color = "white"
    let pointVie = 0
    let pointAttaque = 0
    let pointDefense = 0
    let laSpecial = 0
            let pointVie2 = 0
            let pointAttaque2 = 0
            let pointDefense2 = 0
            let laSpecial2 = 0


let demarage = document.createElement("button")
demarage.textContent = "Choisissez Votre Personnage"
document.body.appendChild(demarage)
demarage.style.width = "20vw"
demarage.style.marginTop = "2rem"
demarage.style.marginLeft = "40vw"
// demarage.parentNode(blockJeu, demarage)

// Disparition du button au click
demarage.addEventListener("click", function(){
    demarage.className = "active"
    if(this.className){
        demarage.style.visibility = "hidden"
    }
    
})

// Création div de gauche
let joueurGauche = document.createElement("div")
joueurGauche.id = "joueurGauche"
joueurGauche.style.height = "80vh"
joueurGauche.style.width = "50%"
joueurGauche.style.backgroundColor = "rebeccapurple"
blockJeu.appendChild(joueurGauche)
let h1Gauche = document.createElement("h1")
h1Gauche.textContent = "Joueur 1"
h1Gauche.style.textAlign = "center"
joueurGauche.appendChild(h1Gauche)


// Création div de droite
let joueurDroite = document.createElement("div")
joueurDroite.id = "joueurDroite" 
joueurDroite.style.height = "80vh"
joueurDroite.style.width = "50%"
joueurDroite.style.backgroundColor = "red"
blockJeu.appendChild(joueurDroite)
let h1Droite = document.createElement("h1")
h1Droite.textContent = "Joueur 2"
h1Droite.style.textAlign = "center"
joueurDroite.appendChild(h1Droite)

// Class constructor
class joueur {
    constructor(pointsVie, pointsAttaque, pointsDefense, capaciteSpecial){
        this.pointsVie = pointsVie
        this.pointsAttaque = pointsAttaque
        this.pointsDefense = pointsDefense
        this.capaciteSpecial = capaciteSpecial
    }

   
}
let guerrier = new joueur (7, 3, 3, function(){ return "Découpage de tête"})
let mage = new joueur (10, 4, 5, function() { return "Tourbillon"})
let pretre = new joueur (10, 0.5, 8, function(){return "Détournement de l'attention"})
let archer = new joueur (10, 7, 6, function(){return "Flèche dans l'oeil"})

let guerrier2 = new joueur (10, 3, 3, function(){ return "Découpage de tête"})
let mage2 = new joueur (10, 4, 5, function() { return "Tourbillon"})
let pretre2 = new joueur (10, 0.5, 8, function(){return "Détournement de l'attention"})
let archer2 = new joueur (10, 7, 6, function(){return "Flèche dans l'oeil"})
// console.log(guerrier , mage);

// Création personages de gauche
    // Guerrier 
    let persoGuerrier1 = document.createElement("div")
    persoGuerrier1.style.backgroundImage = "url('images/guerrier.jpg')"
    persoGuerrier1.style.height = "20%"
    persoGuerrier1.style.width = "40%"
    persoGuerrier1.style.margin = "auto"
    persoGuerrier1.style.backgroundSize = "cover"
    persoGuerrier1.style.backgroundPosition = "center"
    persoGuerrier1.style.backgroundRepeat = "no-repeat"
    let presentationGuerrier1 = document.createElement("h3")
    presentationGuerrier1.textContent = "Guerrier"
    let paraGuerrier1 = document.createElement("p")
    paraGuerrier1.textContent = "Points de vie: " + guerrier.pointsVie
    let paraGuerrier11 = document.createElement("p")
    paraGuerrier11.textContent = "Points d'Attaque: " + guerrier.pointsAttaque

    // Mage
    let persoMage1 = document.createElement("div")
    persoMage1.style.backgroundImage = "url('images/magicien.jpg')"
    persoMage1.style.height = "20%"
    persoMage1.style.width = "40%"
    persoMage1.style.margin = "auto"
    persoMage1.style.backgroundSize = "cover"
    persoMage1.style.backgroundPosition = "center"
    persoMage1.style.backgroundRepeat = "no-repeat"
    let presentationMage1 = document.createElement("h3")
    presentationMage1.textContent = "Mage"
    let paraMage1 = document.createElement("p")
    paraMage1.textContent = "Point de vie: " + guerrier.pointsVie

    // Prete
    let persoPretre1 = document.createElement("div")
    persoPretre1.style.backgroundImage = "url('images/pretre.jpg')"
    persoPretre1.style.height = "20%"
    persoPretre1.style.width = "40%"
    persoPretre1.style.margin = "auto"
    persoPretre1.style.backgroundSize = "cover"
    persoPretre1.style.backgroundPosition = "center"
    persoPretre1.style.backgroundRepeat = "no-repeat"
    let presentationPretre1 = document.createElement("h3")
    presentationPretre1.textContent = "Prêtre"
    let paraPretre1 = document.createElement("p")
    paraPretre1.textContent = "Point de vie: " + guerrier.pointsVie
    
    // Archer
    let persoArcher1 = document.createElement("div")
    persoArcher1.style.backgroundImage = "url('images/archer.jpg')"
    persoArcher1.style.height = "20%"
    persoArcher1.style.width = "40%"
    persoArcher1.style.margin = "auto"
    persoArcher1.style.backgroundSize = "cover"
    persoArcher1.style.backgroundPosition = "center"
    persoArcher1.style.backgroundRepeat = "no-repeat"
    let presentationArcher1 = document.createElement("h3")
    presentationArcher1.textContent = "Archer"
    let paraArcher1 = document.createElement("p")
    paraArcher1.textContent = "Point de vie: " + guerrier.pointsVie

    // Création personages de droite
    // Guerrier
    let persoGuerrier2 = document.createElement("div")
    persoGuerrier2.style.backgroundImage = "url('images/guerrier.jpg')"
    persoGuerrier2.style.height = "20%"
    persoGuerrier2.style.width = "40%"
    persoGuerrier2.style.margin = "auto"
    persoGuerrier2.style.backgroundSize = "cover"
    persoGuerrier2.style.backgroundPosition = "center"
    persoGuerrier2.style.backgroundRepeat = "no-repeat"
    let presentationGuerrier2 = document.createElement("h3")
    presentationGuerrier2.textContent = "Guerrier"
    let monGuerrier2 = document.createElement("p")
    monGuerrier2.textContent = "Point de vie: " + guerrier.pointsVie

    // Mage
    let persoMage2 = document.createElement("div")
    persoMage2.style.backgroundImage = "url('images/magicien.jpg')"
    persoMage2.style.height = "20%"
    persoMage2.style.width = "40%"
    persoMage2.style.margin = "auto"
    persoMage2.style.backgroundSize = "cover"
    persoMage2.style.backgroundPosition = "center"
    persoMage2.style.backgroundRepeat = "no-repeat"
    let presentationMage2 = document.createElement("h3")
    presentationMage2.textContent = "Mage"
    let paraMage2 = document.createElement("p")
    paraMage2.textContent = "Point de vie: " + guerrier.pointsVie

    // Prete
    let persoPretre2 = document.createElement("div")
    persoPretre2.style.backgroundImage = "url('images/pretre.jpg')"
    persoPretre2.style.height = "20%"
    persoPretre2.style.width = "40%"
    persoPretre2.style.margin = "auto"
    persoPretre2.style.backgroundSize = "cover"
    persoPretre2.style.backgroundPosition = "center"
    persoPretre2.style.backgroundRepeat = "no-repeat"
    let presentationPretre2 = document.createElement("h3")
    presentationPretre2.textContent = "Prêtre"
    let paraPretre2 = document.createElement("p")
    paraPretre2.textContent = "Point de vie: " + guerrier.pointsVie

    // Archer
    let persoArcher2 = document.createElement("div")
    persoArcher2.style.backgroundImage = "url('images/archer.jpg')"
    persoArcher2.style.height = "20%"
    persoArcher2.style.width = "40%"
    persoArcher2.style.margin = "auto"
    persoArcher2.style.backgroundSize = "cover"
    persoArcher2.style.backgroundPosition = "center"
    persoArcher2.style.backgroundRepeat = "no-repeat"
    let presentationArcher2 = document.createElement("h3")
    presentationArcher2.textContent = "Archer"
    let paraArcher2 = document.createElement("p")
    paraArcher2.textContent = "Point de vie: " + guerrier.pointsVie

    // console.log("Veillez choisir votre personnage: \n" + guerrier);

    // Création de l'évènement de lancement du jeu

    demarage.addEventListener("click", function(){
        // persoGuerrier1.appendChild(presentationGuerrier1)
        // persoGuerrier1.appendChild(paraGuerrier11)
        // joueurGauche.appendChild(persoGuerrier1)
        persoGuerrier1.appendChild(presentationGuerrier1)
        persoGuerrier1.appendChild(paraGuerrier11)
        joueurGauche.appendChild(persoGuerrier1)
        
        persoMage1.appendChild(presentationMage1)
        persoMage1.appendChild(paraMage1)
        joueurGauche.appendChild(persoMage1)

        persoPretre1.appendChild(presentationPretre1)
        persoPretre1.appendChild(paraPretre1)
        joueurGauche.appendChild(persoPretre1)

        persoArcher1.appendChild(presentationArcher1)
        persoArcher1.appendChild(paraArcher1)
        joueurGauche.appendChild(persoArcher1)


        // Création personages de droite
        persoGuerrier2.appendChild(presentationGuerrier2)
        persoGuerrier2.appendChild(monGuerrier2)
        joueurDroite.appendChild(persoGuerrier2)

        // Mage
        persoMage2.appendChild(presentationMage2)
        persoMage2.appendChild(paraMage2)
        joueurDroite.appendChild(persoMage2)

        // Prete
        persoPretre2.appendChild(presentationPretre2)
        persoPretre2.appendChild(paraPretre2)
        joueurDroite.appendChild(persoPretre2)

        // Archer
        persoArcher2.appendChild(presentationArcher2)
        persoArcher2.appendChild(paraArcher2)
        joueurDroite.appendChild(persoArcher2)



        // console.log("Veillez choisir votre personnage: \n" + guerrier);

    })

    persoGuerrier1.addEventListener("mouseenter", mouseenterData(persoGuerrier1, paraGuerrier1, paraGuerrier11))


    // let persoReunis = persoGuerrier1 + persoGuerrier2 + persoMage1 + persoMage2
    persoGuerrier1.addEventListener("mouseleave", function(){
        
        persoGuerrier1.appendChild(paraGuerrier1).style.display = "none"
        persoGuerrier1.appendChild(paraGuerrier11).style.display = "none"

    })
    
    
    
    function mouseenterData(data , data2, data3){
        data.appendChild(data2).style.display = "block"
            data.appendChild(data3).style.display = "block"
    }


    // Initialisation du Jeu
    let compteur = 0
    console.log(compteur);

    // Création de l'évènement sur le personnage Guerrier 1
    persoGuerrier1.addEventListener("click", () => {
        persoMage1.style.display = "none"
        persoPretre1.style.display = "none"
        persoArcher1.style.display = "none"
        
        persoGuerrier1.style.width = "60%"
        persoGuerrier1.style.height = "80%"

        compteur++
        // console.log(compteur);

        pointVie2 = guerrier.pointsVie
        pointAttaque2 = guerrier.pointsAttaque
        pointDefense2 = guerrier.pointsAttaque
        laSpecial2 = guerrier.capaciteSpecial
    })
      // Création de l'évènement sur le personnage Mage 1
      persoMage1.addEventListener("click", () => {
        persoGuerrier1.style.display = "none"
        persoPretre1.style.display = "none"
        persoArcher1.style.display = "none"
        
        persoMage1.style.width = "60%"
        persoMage1.style.height = "80%"

        compteur++
        console.log(compteur);
        pointVie2 = mage.pointsVie
        pointAttaque2 = mage.pointsAttaque
        pointDefense2 = mage.pointsAttaque
        laSpecial2 = mage.capaciteSpecial
    })

    // Création de l'évènement sur le personnage Prêtre 1
    persoPretre1.addEventListener("click", () => {
        persoGuerrier1.style.display = "none"
        persoMage1.style.display = "none"
        persoArcher1.style.display = "none"
        
        persoPretre1.style.width = "60%"
        persoPretre1.style.height = "80%"

        compteur++
        console.log(compteur);
        pointVie2 = pretre.pointsVie
        pointAttaque2 = pretre.pointsAttaque
        pointDefense2 = pretre.pointsAttaque
        laSpecial2 = pretre.capaciteSpecial
    })

     // Création de l'évènement sur le personnage Archer 1
    persoArcher1.addEventListener("click", () => {
    persoGuerrier1.style.display = "none"
    persoMage1.style.display = "none"
    persoPretre1.style.display = "none"
    
    persoArcher1.style.width = "60%"
    persoArcher1.style.height = "80%"

    compteur++
    console.log(compteur);
    pointVie2 = archer.pointsVie
    pointAttaque2 = archer.pointsAttaque
    pointDefense2 = archer.pointsAttaque
    laSpecial2 = archer.capaciteSpecial
    })

    

    // Création de l'évènement sur le personnage Guerrier 2
    persoGuerrier2.addEventListener("click", () => {
    persoMage2.style.display = "none"
    persoPretre2.style.display = "none"
    persoArcher2.style.display = "none"
    
    persoGuerrier2.style.width = "60%"
    persoGuerrier2.style.height = "80%"
    compteur++
    console.log(compteur);
    document.body.appendChild(buttonDemarrage)
    pointVie = guerrier2.pointsVie
    pointAttaque = guerrier2.pointsAttaque
    pointDefense = guerrier2.pointsAttaque
    laSpecial = guerrier2.capaciteSpecial
    console.log(pointVie);
    })

      // Création de l'évènement sur le personnage Mage 2
      persoMage2.addEventListener("click", () => {
        persoGuerrier2.style.display = "none"
        persoPretre2.style.display = "none"
        persoArcher2.style.display = "none"
        
        persoMage2.style.width = "60%"
        persoMage2.style.height = "80%"

        compteur++
        console.log(compteur);
        document.body.appendChild(buttonDemarrage)
        pointVie = mage2.pointsVie
        pointAttaque = mage2.pointsAttaque
        pointDefense = mage2.pointsAttaque
        laSpecial = mage2.capaciteSpecial
    })   

       // Création de l'évènement sur le personnage Prêtre 2
        persoPretre2.addEventListener("click", () => {
        persoGuerrier2.style.display = "none"
        persoMage2.style.display = "none"
        persoArcher2.style.display = "none"
        
        persoPretre2.style.width = "60%"
        persoPretre2.style.height = "80%"

        compteur++
        console.log(compteur);
        document.body.appendChild(buttonDemarrage)
        pointVie = pretre2.pointsVie
        pointAttaque = pretre2.pointsAttaque
        pointDefense = pretre2.pointsAttaque
        laSpecial = pretre2.capaciteSpecial
    })   

    
       // Création de l'évènement sur le personnage Archer 2
        persoArcher2.addEventListener("click", () => {
        persoGuerrier2.style.display = "none"
        persoMage2.style.display = "none"
        persoPretre2.style.display = "none"
        
        persoArcher2.style.width = "60%"
        persoArcher2.style.height = "80%"

        compteur++
        console.log(compteur);
        document.body.appendChild(buttonDemarrage)
        pointVie2 = guerrier2.pointsVie
        pointAttaque2 = archer2.pointsAttaque
        pointDefense2 = archer2.pointsAttaque
        laSpecial2 = archer2.capaciteSpecial
    }) 
console.log(pointVie);
    // Condition de lancement du jeu
    // Création du button Démarrage
    buttonDemarrage = document.createElement("button")
    buttonDemarrage.textContent = "Démarer"
    buttonDemarrage.style.width = "20vw"
    buttonDemarrage.style.marginTop = "1rem"
    buttonDemarrage.style.marginLeft = "40vw"
    // BUTTON GAUCHE
    // Création du button point de vie
    buttonVie = document.createElement("button")
    buttonVie.textContent = "Vie" + guerrier2.pointsVie
    buttonAttaque = document.createElement("button")
    buttonAttaque.textContent = "Attaque" 
    buttonDefense = document.createElement("button")
    buttonDefense.textContent = "Défense"
    buttonSpeciale = document.createElement("button")
    buttonSpeciale.textContent = "Capacité Spéciale"

    // BUTTON DROITE
    buttonVie2 = document.createElement("button")
    buttonAttaque2 = document.createElement("button")
    buttonDefense2 = document.createElement("button")
    buttonSpeciale2 = document.createElement("button")
    // Disparition du button au click
    buttonDemarrage.addEventListener("click", function(){
        buttonDemarrage.className = "active"
        if(this.className){
            buttonDemarrage.style.visibility = "hidden"
        }
    })

    // Evènement de lancement de la partie
    buttonDemarrage.addEventListener("click", function(){
        
        if(compteur === 2){
            // console.log("Vous avez choisit vos joueurs");
            // AFFECTATION DES ATTRIBUS DU PERSONNAGE GAUCHE
            buttonVie.textContent = "Vie: " + pointVie2
            buttonAttaque.textContent = "Attaque: " + pointAttaque2
            buttonDefense.textContent = "Défense: " + pointDefense2
            buttonSpeciale.textContent = "Capacité Spéciale: " 

            joueurGauche.appendChild(buttonVie) + "\n"
            joueurGauche.appendChild(buttonAttaque)
            joueurGauche.appendChild(buttonDefense)
            joueurGauche.appendChild(buttonSpeciale)
            
            // AFFECTATION DES ATTRIBUS DU PERSONNAGE DROITE
            buttonVie2.textContent = "Vie: " + pointVie
            buttonAttaque2.textContent = "Attaque: " + pointAttaque
            buttonDefense2.textContent = "Défense: " + pointDefense
            buttonSpeciale2.textContent = "Capacité Spéciale: "
            
            joueurDroite.appendChild(buttonVie2)
            joueurDroite.appendChild(buttonAttaque2)
            joueurDroite.appendChild(buttonDefense2)
            joueurDroite.appendChild(buttonSpeciale2)
        }
    })

    // AJOUT DES EVENEMENTS SUR LES BUTTONS DE JEU
    // if(guerrier.pointsVie <= 10){

        buttonVie.addEventListener("click", function(){
            
            guerrier.pointVie++
            console.log(parseInt(guerrier.pointVie));
            buttonVie.textContent = "Vie: " + pointVie2++
            // buttonVie.disabled = true
        })
        
    // }
 






    // function selection(monPerso){

    // }

  
    //     // Définition des joueurs
    // const player = {
    //     health: 100,
    //     attack: 10
    // };

    // const enemy = {
    //     health: 100,
    //     attack: 8
    // };

    // // Bouton d'attaque
    // const attackBtn = document.getElementById('attack-btn');
    // attackBtn.addEventListener('click', () => {
    //     playerAttack();
    //     if (isGameOver()) {
    //         alert('Game Over. Refresh to play again.');
    //     } else {
    //         enemyAttack();
    //         isGameOver();
    //     }
    //     updateUI();
    // });

    // // Fonction d'attaque du joueur
    // function playerAttack() {
    //     const damage = Math.floor(Math.random() * player.attack) + 1;
    //     enemy.health -= damage;
    // }

    // // Fonction d'attaque de l'ennemi
    // function enemyAttack() {
    //     const damage = Math.floor(Math.random() * enemy.attack) + 1;
    //     player.health -= damage;
    // }

    // // Vérifie si le jeu est terminé
    // function isGameOver() {
    //     if (player.health <= 0 || enemy.health <= 0) {
    //         return true;
    //     }
    //     return false;
    // }

    // // Met à jour l'interface utilisateur
    // function updateUI() {
    //     document.getElementById('player-health').textContent = `Health: ${player.health}`;
    //     document.getElementById('enemy-health').textContent = `Health: ${enemy.health}`;
    // }



   


