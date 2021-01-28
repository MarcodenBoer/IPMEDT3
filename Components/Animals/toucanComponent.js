function createToucanAnimalInfo(){
  let camera = document.getElementById('js--cameraEl');
  let container = document.createElement("a-plane");
  let background = document.createElement('a-plane');
  let animal = document.createElement('a-obj-model');
  let info = document.createElement('a-text');
  let naam = document.createElement('a-text');
  let clearInfoButton = document.getElementById('js--clearInfoButton');
  let dierSound = document.getElementById('js--dierSound');
  let textSound = document.getElementById('js--textSound');
  let mouseCircle = document.getElementById("js--mouseCircle");
  let infoText = "Kijk, die snavel! Het lijkt wel een banaan. De toekan plukt er vruchten mee. Ja, ook bananen. Het Amazonewoud in Zuid-Amerika is net een supermarkt. De toekan vindt er fruit en ook insecten, eieren en jonge vogels. Als ze gaan broeden, maken het mannetje en het vrouwtje een nest in een holle boom. Hoe zouden ze daar nou in komen met die reuzensnavel?"
  container.setAttribute('opacity', '0');
  container.setAttribute('position', '0 1 -4');
  container.setAttribute('scale', '.5 .5 .5');
  container.setAttribute('id', "js--infoBackground");
  background.setAttribute('color', '#fa9d44');
  background.setAttribute('scale', '15 15 5');
  background.setAttribute('position', '0 0 0.2');
  info.setAttribute('color', 'black');
  info.setAttribute('position', '-.25 -1.5 1');
  info.setAttribute('value', infoText);
  localStorage.setItem("infoDier", info.getAttribute("value"));
  info.setAttribute('width', "3");
  info.setAttribute('wrap-count', "30");
  naam.setAttribute('color', 'black');
  naam.setAttribute('position', '-3 0 1');
  naam.setAttribute('scale', '1.5 1.25 1.25');
  naam.setAttribute('value', "Toucan");
  naam.setAttribute('width', "10");
  animal.setAttribute('src', '#toucan-obj');
  animal.setAttribute('mtl', '#toucan-mtl');
  animal.setAttribute('position', '-2 -1.75 1');
  animal.setAttribute('scale', '0.15 0.15 0.15');
  animal.setAttribute('animation', 'property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 2500;');
  container.appendChild(animal);
  container.appendChild(info);
  container.appendChild(naam);
  camera.appendChild(container);
  clearInfoButton.style.opacity = 1;
  clearInfoButton.removeAttribute('disabled');
  dierSound.style.opacity = 1;
  dierSound.removeAttribute('disabled');
  textSound.style.opacity = 1;
  textSound.removeAttribute('disabled');
  mouseCircle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.0051");
  mouseCircle.setAttribute('cursor', 'fuse:false');
  }

  AFRAME.registerComponent('toucancomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#toucanSound");
    localStorage.setItem("audioDier", "#toucanSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createToucanAnimalInfo();}
    })
  }
})
