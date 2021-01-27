const clearInfoButton = document.getElementById('js--clearInfoButton');

function removeUi() {
  console.log("klink");
  let camera = document.getElementById('js--cameraEl');
  let infoBackground = document.getElementById("js--infoBackground");
  camera.removeChild(infoBackground);
  clearInfoButton.style.opacity = 0;
  clearInfoButton.setAttribute("disabled", "");
}

clearInfoButton.addEventListener('click', removeUi);
