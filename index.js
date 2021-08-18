// Boutons
// Récupérer la liste de bouton
var ButtonList = document.querySelectorAll(".drum");

// ajouter la commande a chaque élément de la liste de bouton
for (i = 0; i < ButtonList.length; i++) {
  ButtonList[i].addEventListener("click", function handlerClick() {
    //sTom1.play();
    //console.log(this.innerHTML);
    //this.style.color="blue";
    playDrum(this.innerHTML);
    LightdDrum(this.innerHTML);
  });
}

// KeyBoard

addEventListener("keydown", function(event) {
  // definiton la fonction
  //Event est l'événenement qui a déclenché l'Event
  //Uniquement pour les keydown pour notre cas car passé en argument
  playDrum(event.key);
  LightdDrum(event.key);
});


//Sounds


function playDrum(keyPlay) {
  switch (keyPlay) {
    case "a":
      var sTom1 = new Audio("sounds\\tom-1.mp3");
      sTom1.play();
      break;
    case "z":
      var sTom2 = new Audio("sounds\\tom-2.mp3");
      sTom2.play();
      break;
    case "e":
      var sTom3 = new Audio("sounds\\tom-3.mp3");
      sTom3.play();
      break;
    case "r":
      var sTom4 = new Audio("sounds\\tom-4.mp3");
      sTom4.play();
      break;
    case "t":
      var sSnare = new Audio("sounds\\snare.mp3");
      sSnare.play();
      break;
    case "y":
      var sCrash = new Audio("sounds\\crash.mp3");
      sCrash.play();
      break;
    case "u":
      var sKick = new Audio("sounds\\kick-bass.mp3");
      sKick.play();
      break;
    default:
      console.log(this.innerHTML + " pas prévu");
  }

}

function LightdDrum(KeyPlay) {

  var boutonPlayed = document.querySelector(".drum." + KeyPlay);
  console.log(boutonPlayed);
  boutonPlayed.classList.add("pressed");

  setTimeout(function() {
    boutonPlayed.classList.remove("pressed");
  }, 100);

}
