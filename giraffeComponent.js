AFRAME.registerComponent('giraffecomponent', {
  init: function(){
    let audio = document.querySelector("#giraffeSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
