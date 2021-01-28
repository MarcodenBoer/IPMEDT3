function createZebraAnimalInfo(){
  let camera = document.getElementById('js--cameraEl');
  let background = document.createElement("a-plane");
  let animal = document.createElement('a-obj-model');
  let info = document.createElement('a-text');
  let clearInfoButton = document.getElementById('js--clearInfoButton');
  let mouseCircle = document.getElementById("js--mouseCircle");
  let infoText = "Wat een schattig veulentje, he. Er bestaat geen tweede zebra met precies dezelfde strepen. Zebra's herkennen elkaar aan hun streepjescode. Maar als ze dicht bij elkaar staan, zie je niet meer wie wie is. Zo brengen ze leeuwen in verwarring. Denk jij dat zebra's zwarte dieren zijn met witte strepen of witte dieren met zwarte strepen?"
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
  animal.setAttribute('src', '#zebra-obj');
  animal.setAttribute('mtl', '#zebra-mtl');
  animal.setAttribute('position', '-2 -1.5 1');
  animal.setAttribute('scale', '0.2 0.2 0.2');
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

  AFRAME.registerComponent('zebracomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#zebraSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createZebraAnimalInfo();}
    })
  }
})
