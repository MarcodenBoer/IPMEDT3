const utterance = new SpeechSynthesisUtterance()

utterance.rate = 0.8; //zet de spraak snelheid wat lager.
utterance.lang = "nl-NL"; //zet de taal op nederlands

function infoDierenLezen(){
  let info = localStorage.getItem("infoDier");
  utterance.text = info
  speechSynthesis.speak(utterance);
}
