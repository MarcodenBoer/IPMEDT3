AFRAME.registerComponent('struisvogelcomponent', {
  init: function(){
    let audio = document.querySelector("#struisvogelSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
