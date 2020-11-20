document.addEventListener("DOMContentLoaded", function(event) {
    //Le jeu
   class Jeu{   // Majuscule par convention
       //Toujours commencer par une fct constructeur
       constructor() {
           console.log("Création du jeu");
       }
   }

    //Le serpent
    class Serpent{
       constructor() {
           console.log("Création du serpent");
       }
    }


    //La pomme
    class Pomme{
       constructor() {
           console.log("Création de la pomme");
       }
    }

    var unePartie = new Jeu();

});