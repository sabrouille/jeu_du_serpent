document.addEventListener("DOMContentLoaded", function(event) {
    //Le jeu
   class Jeu{   // Majuscule par convention
       //Toujours commencer par une fct constructeur
       constructor(_idSvg, _idPointage) {   //_ pour différencier les paramètres des variables
           console.log("Création du jeu");

           this.s = Snap(_idSvg);   //this pour appeler la classe

           this.sortiePointage = document.querySelector(_idPointage);

           this.grandeurCarre = 20;
           this.grandeurGrille = 15;
       }

       nouvellePartie(){
           this.finPartie();

           this.affichagePointage(1);

           this.pomme = new Pomme(this);

           this.serpent = new Serpent(this);
       }

       finPartie(){
           if(this.pomme !== undefined){
               this.pomme.supprimePomme();
               this.pomme = undefined;
           }
       }

       affichagePointage(_lePointage){
           this.sortiePointage.innerHTML = _lePointage;
       }
   }

    //Le serpent
    class Serpent{
       constructor(_leJeu) {
           console.log("Création du serpent");

           this.leJeu = _leJeu;

           this.currentX = -1;
           this.currentY = 0;

           this.nextMoveX = 1;
           this.nextMoveY = 0;

           this.serpentLongueur = 1;
           this.tblCarreSerpent = [];

           this.vitesse = 250;
           this.timing = setInterval(this.controleSerpent.bind(this), this.vitesse);

           document.addEventListener("keydown", this.verifTouche.bind(this));   //bind force à prendre Serpent comme this au lieu de document
       }

       verifTouche(_evt){
           var evt = _evt;

           console.log(evt.keyCode);

           this.deplacement(evt.keyCode);
       }

       deplacement(_dirCode){
           switch(_dirCode){
               case 37:
                   this.nextMoveX = -1;
                   this.nextMoveY = 0;
                   break;

               case 38:
                   this.nextMoveX = 0;
                   this.nextMoveY = -1;
                   break;

               case 39:
                   this.nextMoveX = 1;
                   this.nextMoveY = 0;
                   break;

               case 40:
                   this.nextMoveX = 0;
                   this.nextMoveY = 1;
                   break;
           }

           //console.log(this.nextMoveX, this.nextMoveY);
       }

       controleSerpent(){
           var nextX = this.currentX + this.nextMoveX;
           var nextY = this.currentY + this.nextMoveY;

           this.dessineCarre(nextX, nextY);
           this.currentX = nextX;
           this.currentY = nextY;
       }

       dessineCarre(x, y){

       }

       supprimeSerpent(){

       }
    }


    //La pomme
    class Pomme{
       constructor(_leJeu) {
           console.log("Création de la pomme");

           this.leJeu = _leJeu;

           this.pomme = [];

           this.ajoutePomme();
       }

       ajoutePomme(){
           var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
           var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

           this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill: "red"}), posX, posY];

       }

       supprimePomme(){
           this.pomme[0].remove();
       }
    }

    var unePartie = new Jeu("#jeu", "#pointage");

   var btnJouer = document.querySelector("#btnJouer");
   btnJouer.addEventListener("click", nouvellePartie);

   function nouvellePartie(){
       unePartie.nouvellePartie();
   }
});