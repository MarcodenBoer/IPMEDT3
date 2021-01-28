function createToucanAnimalInfo(){
  let camera = document.getElementById('js--cameraEl');
  let background = document.createElement("a-plane");
  let animal = document.createElement('a-obj-model');
  let info = document.createElement('a-text');
  let clearInfoButton = document.getElementById('js--clearInfoButton');
  let mouseCircle = document.getElementById("js--mouseCircle");
  let infoText = "Kijk, die snavel! Het lijkt wel een banaan. De toekan plukt er vruchten mee. Ja, ook bananen. Het Amazonewoud in Zuid-Amerika is net een supermarkt. De toekan vindt er fruit en ook insecten, eieren en jonge vogels. Als ze gaan broeden, maken het mannetje en het vrouwtje een nest in een holle boom. Hoe zouden ze daar nou in komen met die reuzensnavel?"
  background.setAttribute('opacity', '0');
  background.setAttribute('position', '0 1 -4');
  background.setAttribute('scale', '.5 .5 .5');
  background.setAttribute('id', "js--infoBackground");
  info.setAttribute('color', 'black');
  info.setAttribute('position', '-.25 -1.5 1');
  info.setAttribute('value', infoText);
  localStorage.setItem("infoDier", info.getAttribute("value"));
  info.setAttribute('width', "3");
  info.setAttribute('wrap-count', "30");
  animal.setAttribute('src', '#toucan-obj');
  animal.setAttribute('mtl', '#toucan-mtl');
  animal.setAttribute('position', '-2 -1.75 1');
  animal.setAttribute('scale', '0.15 0.15 0.15');
  animal.setAttribute('animation', 'property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 2500;');
  background.appendChild(animal);
  background.appendChild(info);
  camera.appendChild(background);
  clearInfoButton.style.opacity = 1;
  clearInfoButton.removeAttribute('disabled');
  mouseCircle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.0051");
  mouseCircle.setAttribute('cursor', 'fuse:false');
  infoDierenLezen();
  }

  AFRAME.registerComponent('toucancomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#toucanSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createToucanAnimalInfo();}
    })
  }
})
