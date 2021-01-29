const utterance = new SpeechSynthesisUtterance()
const infoBtn = document.getElementById('js--clearInfoButton');


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
