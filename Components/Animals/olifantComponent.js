function createOlifantAnimalInfo(){
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
  let infoText = "Ken jij een nog groter dier? Dan weet je al veel van de natuur! Wat een giga oren he? Hij wappert ermee om af te koelen. In Afrika is het meestal erg warm. Daarom drinken  olifanten veel. Per dag wel 150 liter water. Dat is net zoveel als er in jouw badkuip past!"
  container.setAttribute('opacity', '0');
  container.setAttribute('position', '0 1 -4');
  container.setAttribute('scale', '.5 .5 .5');
  container.setAttribute('id', "js--infoBackground");
  background.setAttribute('color', '#fa9d44');
  background.setAttribute('scale', '15 15 5');
  background.setAttribute('position', '0 0 0.2');
  info.setAttribute('color', '#191919');
  info.setAttribute('position', '-.25 -2 1');
  info.setAttribute('value', infoText);
  localStorage.setItem("infoDier", info.getAttribute("value"));
  localStorage.setItem("audioDier", "#olifantSound");
  info.setAttribute('width', "3.5");
  info.setAttribute('wrap-count', "25");
  naam.setAttribute('color', '#191919');
  naam.setAttribute('position', '-3 0 1');
  naam.setAttribute('scale', '1.5 1.25 1.25');
  naam.setAttribute('value', "Olifant");
  naam.setAttribute('width', "10");
  animal.setAttribute('src', '#olifant-obj');
  animal.setAttribute('mtl', '#olifant-mtl');
  animal.setAttribute('position', '-1.8 -2.5 1.5');
  animal.setAttribute('scale', '0.05 0.05 0.05');
  animal.setAttribute('animation', 'property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 3500;');
  container.appendChild(animal);
  container.appendChild(info);
  container.appendChild(naam);
  container.appendChild(background);
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

  AFRAME.registerComponent('olifantcomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#olifantSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createOlifantAnimalInfo();}
    })
  }
})
