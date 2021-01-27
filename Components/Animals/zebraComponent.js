function createZebraAnimalInfo(){
    let camera = document.getElementById('js--cameraEl');
    let background = document.createElement("a-plane");
    let animal = document.createElement('a-obj-model');
    let info = document.createElement('a-text');
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    background.setAttribute('opacity', '0');
    background.setAttribute('position', '0 1 -4');
    background.setAttribute('scale', '.5 .5 .5');
    info.setAttribute('color', 'black');
    info.setAttribute('position', '1 -.5 1');
    info.setAttribute('value', "info over een zebra");
    animal.setAttribute('src', '#zebra-obj');
    animal.setAttribute('mtl', '#zebra-mtl');
    animal.setAttribute('position', '-2 -2 1');
    animal.setAttribute('scale', '0.1 0.1 0.1');
    animal.setAttribute('animation', 'property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 2500;');
    background.appendChild(animal);
    background.appendChild(info);
    camera.appendChild(background);
    clearInfoButton.style.opacity = 1;
    clearInfoButton.removeAttribute('disabled');
  }

  AFRAME.registerComponent('zebracomponent', {
  init: function(){
    let audio = document.querySelector("#zebraSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      createZebraAnimalInfo();
    })
  }
})
