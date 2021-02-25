const utterance = new SpeechSynthesisUtterance()
const infoBtn = document.getElementById('js--clearInfoButton');

const logbook = document.getElementById('js--logbook'); //deze wordt gedefineerd voor de progress.js hier omdat het ingeladen moet zijn voor de components en voor progress moeten de components ingeladen zijn
const btn = document.getElementById('js--log-button');


utterance.rate = 0.8; //zet de spraak snelheid wat lager.
utterance.lang = "nl-NL"; //zet de taal op nederlands

//In chrome kan speechSynthesis niet de volledig text afspelen, dit is een fout bij chrome in andere browsers werkt het wel goed
function infoDierenLezen(){
  let info = localStorage.getItem("infoDier");
  utterance.text = info
  speechSynthesis.speak(utterance);
}

function stopinfoDierenLezen() {
  speechSynthesis.cancel();
}

infoBtn.addEventListener('click', stopinfoDierenLezen);
