function createPandaAnimalInfo(){
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
  let infoText = "Geloof jij het: een roofdier die planten eet? Ik ook niet. En toch is het zo. Kijk maar naar de panda. Dat is een heuse beer. En beren zijn roofdieren. Maar de panda is vegetariër. Hij lust alleen bamboe. Nou ja, iemand moet dat opeten voor het alles overwoekert. Wist je dat de panda een extra duimpje heeft? Daar brengt hij handig een bamboestengel mee naar zijn mond."
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
  localStorage.setItem("audioDier", "#pandaSound");
  info.setAttribute('width', "3.5");
  info.setAttribute('wrap-count', "25");
  naam.setAttribute('color', '#191919');
  naam.setAttribute('position', '-3 0 1');
  naam.setAttribute('scale', '1.5 1.25 1.25');
  naam.setAttribute('value', "Panda");
  naam.setAttribute('width', "10");
  animal.setAttribute('src', '#panda-obj');
  animal.setAttribute('mtl', '#panda-mtl');
  animal.setAttribute('position', '-2 -2 1.5');
  animal.setAttribute('scale', '0.18 0.18 0.18');
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

  AFRAME.registerComponent('pandacomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#pandaSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
      createPandaAnimalInfo();}
    })
  }
})
