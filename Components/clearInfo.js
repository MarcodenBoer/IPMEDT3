const clearInfoButton = document.getElementById('js--clearInfoButton');
const dierSound = document.getElementById('js--dierSound');
const textSound = document.getElementById('js--textSound');

const finish = document.getElementById('js--finish');
const closeFinish = document.getElementById('js--close-finish');
let gevangen = false;

let mouseCircle = document.getElementById("js--mouseCircle");

function removeUi() {
  let camera = document.getElementById('js--cameraEl');
  let infoBackground = document.getElementById("js--infoBackground");
  camera.removeChild(infoBackground);
  clearInfoButton.style.opacity = 0;
  clearInfoButton.setAttribute("disabled", "");
  dierSound.style.opacity = 0;
  dierSound.setAttribute("disabled", "");
  textSound.style.opacity = 0;
  textSound.setAttribute("disabled", "");
  mouseCircle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.01");
  mouseCircle.setAttribute('cursor', "fuse: true; fuseTimeout: 2000;");
  if (displayGiraffe == true || displayHert == true || displayNijlpaard == true || displayOlifant == true || displayPanda == true || displayPenguin == true || displayStruisvogel == true || displayToucan == true || displayZebra == true) {
    logbook.style.display = "block";

    displayGiraffe = false;
    displayHert = false;
    displayNijlpaard = false;
    displayOlifant = false;
    displayPanda = false;
    displayPenguin = false;
    displayStruisvogel = false;
    displayToucan = false;
    displayZebra = false;
  }
  //Als alle dieren gevangen zijn laat bericht zien dat alle dieren gevangen zijn
  if (gevangenGiraffe == true && gevangenHert == true && gevangenNijlpaard == true && gevangenOlifant == true && gevangenPanda == true && gevangenPenguin == true && gevangenStruisvogel == true && gevangenToucan == true && gevangenZebra == true && gevangen == false) {
    caughtAllAnimals();
  }

  btn.style.display = "block";
}

function caughtAllAnimals() {
  gevangen == true;
  finish.style.display = "block";
}

function closeCaughtAllAnimals() {
  finish.style.display = "none";

}

clearInfoButton.addEventListener('click', removeUi);
closeFinish.addEventListener('click', closeCaughtAllAnimals);
