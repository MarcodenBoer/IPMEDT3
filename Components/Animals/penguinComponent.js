AFRAME.registerComponent('penguincomponent', {
  init: function(){
    let audio = document.querySelector("#penguinSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
