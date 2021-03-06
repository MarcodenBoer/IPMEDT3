function createGiraffeAnimalInfo(){
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
    let infoText = "Woon je op de tweede etage van een flat? Een Afrikaanse giraffe kijkt zo bij je naar binnen. Met die lange nek kan hij bij de hoogste blaadjes. Maar drinken is lastig. Zak een beetje door je poten, dan lukt het wel. Een pasgeboren giraf is al twee meter hoog. Hij behoort tot de grootste baby's in het dierenrijk. Wist je dat een giraf met zijn tong zijn oren kan schoonmaken?"
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
    localStorage.setItem("audioDier", '#giraffeSound');
    info.setAttribute('width', "3.5");
    info.setAttribute('wrap-count', "25");
    naam.setAttribute('color', '#191919');
    naam.setAttribute('position', '-3 0 1');
    naam.setAttribute('scale', '1.5 1.25 1.25');
    naam.setAttribute('value', "Giraffe");
    naam.setAttribute('width', "10");
    animal.setAttribute('src', '#giraffe-obj');
    animal.setAttribute('mtl', '#giraffe-mtl');
    animal.setAttribute('position', '-1.8 -2 1.5');
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

AFRAME.registerComponent('giraffecomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#giraffeSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
        createGiraffeAnimalInfo();
      }
    })
  }
})
