const introContainer = document.getElementById('js--introContainer');
const introButton = document.getElementById('js--introButton');
const introKop = document.getElementById('js--introKop');
const introText = document.getElementById('js--introText');
const camera = document.getElementById('js--cameraEl');
const circle = document.getElementById('js--mouseCircle');
let counter = 0;

function progressApp(){
  if (counter == 0) {
    introKop.setAttribute('value', "Dankjewel!");
    introText.setAttribute('value', "Met jouw hulp zijn alle dieren zo weer gevangen! Scan de dieren plaatjes verspreid door het ziekenhuis en kijk naar de dieren die je ziet om ze te vangen. Success!");
    introButton.innerHTML = "Begin!"
    counter++;
  }else {
    camera.removeChild(introContainer);
    circle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.01");
    circle.setAttribute('cursor', "fuse: true; fuseTimeout: 2000;");
  }
}

introButton.addEventListener("click", progressApp);
