const clearInfoButton = document.getElementById('js--clearInfoButton');
const dierSound = document.getElementById('js--dierSound');
const textSound = document.getElementById('js--textSound');

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
}

clearInfoButton.addEventListener('click', removeUi);
