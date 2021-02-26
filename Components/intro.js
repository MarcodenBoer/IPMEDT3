const introContainer = document.getElementById('js--introContainer');
const introButton = document.getElementById('js--introButton');
const introKop = document.getElementById('js--introKop');
const introText = document.getElementById('js--introText');
const camera = document.getElementById('js--cameraEl');
const circle = document.getElementById('js--mouseCircle');
const animalContainer = document.getElementById('js--animalContainer');
const logButton = document.getElementById('js--log-button');
let counter = 0;

function progressApp(){
  if (counter == 0) {
    introText.setAttribute("value", 'Oh nee, alle dieren zijn ontsnapt en lopen nu vrij rond door het ziekenhuis. Help jij ze te vangen en word jij onze Hospital Hero?');
    introKop.setAttribute("value", "Help!");
    introButton.innerHTML = "Help nu!"
    introContainer.removeChild(animalContainer);
    counter++;
  }else if (counter == 1) {
    introKop.setAttribute('value', "Dankjewel!");
    introText.setAttribute('value', "Met jouw hulp zijn alle dieren zo weer gevangen! Scan de dieren plaatjes verspreid door het ziekenhuis en kijk naar de dieren die je ziet om ze te vangen. Success!");
    introButton.innerHTML = "Begin!"
    counter++;
  }
  else {
    camera.removeChild(introContainer);
    circle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.01");
    circle.setAttribute('cursor', "fuse: true; fuseTimeout: 2000;");
    logButton.style.display = "block";
  }
}

introButton.addEventListener("click", progressApp);
