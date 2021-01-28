function createGiraffeAnimalInfo(){
    let camera = document.getElementById('js--cameraEl');
    let background = document.createElement("a-plane");
    let animal = document.createElement('a-obj-model');
    let info = document.createElement('a-text');
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let dierSound = document.getElementById('js--dierSound');
    let textSound = document.getElementById('js--textSound');
    let mouseCircle = document.getElementById("js--mouseCircle");
    let infoText = "Woon je op de tweede etage van een flat? Een Afrikaanse giraffe kijkt zo bij je naar binnen. Met die lange nek kan hij bij de hoogste blaadjes. Maar drinken is lastig. Zak een beetje door je poten, dan lukt het wel. Een pasgeboren giraf is al twee meter hoog. Hij behoort tot de grootste baby's in het dierenrijk. Wist je dat een giraf met zijn tong zijn oren kan schoonmaken?"
    background.setAttribute('opacity', '0');
    background.setAttribute('position', '0 1 -4');
    background.setAttribute('scale', '.5 .5 .5');
    background.setAttribute('id', "js--infoBackground");
    info.setAttribute('color', 'black');
    info.setAttribute('position', '-.5 -1.5 1');
    info.setAttribute('value', infoText);
    localStorage.setItem("infoDier", info.getAttribute("value"));
    info.setAttribute('width', "3");
    info.setAttribute('wrapcount', "25");
    animal.setAttribute('src', '#giraffe-obj');
    animal.setAttribute('mtl', '#giraffe-mtl');
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
    mouseCircle.setAttribute('geometry', "primitive: ring; radiusInner: 0.005; radiusOuter: 0.005");
    mouseCircle.setAttribute('cursor', 'fuse:false');
  }

AFRAME.registerComponent('giraffecomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#giraffeSound");
    localStorage.setItem("audioDier", "#giraffeSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
        createGiraffeAnimalInfo();
      }
    })
  }
})
