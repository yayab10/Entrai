// Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :

let nombre
let max = 0

for( let i = 1; i <= 20; i++){
    nombre= parseInt(prompt("Donne moi 20 nombres"))
    console.log("le nombre n°",i," est : ",nombre) 
    if (!isNaN(nombre)){
            if (nombre > max){
            max = nombre
        }  
    }
}
console.log("le plus grand nombre que tu as donné est ",max)