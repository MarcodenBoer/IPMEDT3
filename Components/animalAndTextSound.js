//varibale zijn al gedefineerd in clearinfo.js

function playTextSound() {
    if (speechSynthesis.speaking) {
      stopinfoDierenLezen();
    }
    else {
      infoDierenLezen();
    }
}

function playAnimalSound() {
  //Je pakt uit een compoopnent bestand de src als een string en die zet je dan in de let audio
  //omdat localStorage het anders omzet naar een string en dan kan je .play() niet aanroepen
  let audioSrc = localStorage.getItem("audioDier");
  let audio = document.querySelector(audioSrc);
  audio.play();

}

textSound.addEventListener("click", playTextSound);
dierSound.addEventListener("click", playAnimalSound);
