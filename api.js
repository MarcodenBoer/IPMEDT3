window.onload = function (){
  const test = document.getElementById('js--test');
  const utterance = new SpeechSynthesisUtterance()
  utterance.rate = 0.8; //zet de spraak snelheid wat lager.
  utterance.lang = "nl-NL"; //zet de taal op nederlands
  utterance.text = "Hallo dames en heren hoe gaat het?"

  test.addEventListener("mouseenter", () => {
    utterance.text = "Hallo dames en heren hoe gaat het met jullie?"
    speechSynthesis.speak(utterance);
  });

}
