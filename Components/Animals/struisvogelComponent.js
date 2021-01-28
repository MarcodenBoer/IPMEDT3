function createStruisvogelAnimalInfo(){
  let camera = document.getElementById('js--cameraEl');
  let background = document.createElement("a-plane");
  let animal = document.createElement('a-obj-model');
  let info = document.createElement('a-text');
  let clearInfoButton = document.getElementById('js--clearInfoButton');
  let dierSound = document.getElementById('js--dierSound');
  let textSound = document.getElementById('js--textSound');
  let mouseCircle = document.getElementById("js--mouseCircle");
  let infoText = "Ken jij het mysterie van de verdwenen tenen? Struisvogels zijn er drie kwijt. Als enige vogels hebben ze er nu nog maar twee over. Gelukkig maar, want ze kunnen er heel hard mee lopen. Ze halen wel 60 kilometer per uur. Met hun grote teen zetten ze af, met de andere bewaren ze hun evenwicht. Een struisvogel zal nooit struiselen...ehh struikelen."
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
  animal.setAttribute('src', '#ostrich-obj');
  animal.setAttribute('mtl', '#ostrich-mtl');
  animal.setAttribute('position', '-2 -2 1');
  animal.setAttribute('scale', '0.1 0.1 0.1');
  animal.setAttribute('animation', 'property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 2500;');
  background.appendChild(animal);
  background.appendChild(info);
  camera.appendChild(background);
  clearInfoButton.style.opacity = 1;
  clearInfoButton.removeAttribute('disabled');
  dierSound.style.opacity = 1;
  dierSound.removeAttribute('disabled');
  textSound.style.opacity = 1;
  textSound.removeAttribute('disabled');
  mouseCircle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.0051");
  mouseCircle.setAttribute('cursor', 'fuse:false');
  }

  AFRAME.registerComponent('struisvogelcomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#struisvogelSound");
    localStorage.setItem("audioDier", "#struisvogelSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createStruisvogelAnimalInfo();}
    })
  }
})
