function createPenguinAnimalInfo(){
  let camera = document.getElementById('js--cameraEl');
  let background = document.createElement("a-plane");
  let animal = document.createElement('a-obj-model');
  let info = document.createElement('a-text');
  let clearInfoButton = document.getElementById('js--clearInfoButton');
  let mouseCircle = document.getElementById("js--mouseCircle");
  let infoText = "Pinguins kunnen niet vliegen. Of toch wel: ze vliegen onder water. De meeste pinguins leven op de Zuidpool. Een dikke speklaag beschermt tegen de kou. Vaak kruipen pinguins dicht tegen elkaar om wam te blijven. Honderden pinguins vormen samen een groot dekbed. Pinguins leggen maar een ei. Het mannetje broedt het uit. Moeder gaat naar zee om eten te halen."
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
  animal.setAttribute('src', '#penguin-obj');
  animal.setAttribute('mtl', '#penguin-mtl');
  animal.setAttribute('position', '-2 -2 1');
  animal.setAttribute('scale', '0.1 0.1 0.1');
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

  AFRAME.registerComponent('penguincomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#penguinSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createPenguinAnimalInfo();}
    })
  }
})
