function createPandaAnimalInfo(){
  let camera = document.getElementById('js--cameraEl');
  let background = document.createElement("a-plane");
  let animal = document.createElement('a-obj-model');
  let info = document.createElement('a-text');
  let clearInfoButton = document.getElementById('js--clearInfoButton');
  let mouseCircle = document.getElementById("js--mouseCircle");
  let infoText = "Geloof jij het: een roofdier die planten eet? Ik ook niet. En toch is het zo. Kijk maar naar de panda. Dat is een heuse beer. En beren zijn roofdieren. Maar de panda is vegetariër. Hij lust alleen bamboe. Nou ja, iemand moet dat opeten voor het alles overwoekert. Wist je dat de panda een extra duimpje heeft? Daar brengt hij handig een bamboestengel mee naar zijn mond."
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
  animal.setAttribute('src', '#panda-obj');
  animal.setAttribute('mtl', '#panda-mtl');
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
