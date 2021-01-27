function createHertAnimalInfo(){
    let camera = document.getElementById('js--cameraEl');
    let background = document.createElement("a-plane");
    let animal = document.createElement('a-obj-model');
    let info = document.createElement('a-text');
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let infoText = "De muntjak is een klein roodbruin hert uit Indonesië. Hij eet bladeren, kruiden, grassen, vruchten en zaden. Veel herten kunnen blaffen als een hond. De muntjak kan het extra goed. Blafhert is daarom zijn bijnaam. Zijn gewei is niet zo groot. Dat zit toch maar in de weg tussen de struiken. Hij heeft iets extra's: scherpe hoektanden."
    background.setAttribute('opacity', '0');
    background.setAttribute('position', '0 1 -4');
    background.setAttribute('scale', '.5 .5 .5');
    background.setAttribute('id', "js--infoBackground");
    info.setAttribute('color', 'black');
    info.setAttribute('position', '1 -.5 1');
    info.setAttribute('value', infoText);
    animal.setAttribute('src', '#hert-obj');
    animal.setAttribute('mtl', '#hert-mtl');
    animal.setAttribute('position', '-2 -2 1');
    animal.setAttribute('scale', '0.1 0.1 0.1');
    animal.setAttribute('animation', 'property: rotation; easing: linear; from: 0 0 0; to: 0 360 0; loop: true; dur: 2500;');
    background.appendChild(animal);
    background.appendChild(info);
    camera.appendChild(background);
    clearInfoButton.style.opacity = 1;
    clearInfoButton.removeAttribute('disabled');
  }

  AFRAME.registerComponent('impalacomponent', {
  init: function(){
    let clearInfoButton = document.getElementById('js--clearInfoButton');
    let audio = document.querySelector("#impalaSound");
    this.el.addEventListener('click', () =>{
      audio.play();
      if (clearInfoButton.style.opacity == 1) {return}
      else {
        createHertAnimalInfo();
      }
    })
  }
})
