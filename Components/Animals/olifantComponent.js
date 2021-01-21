AFRAME.registerComponent('olifantcomponent', {
  init: function(){
    let audio = document.querySelector("#olifantSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
