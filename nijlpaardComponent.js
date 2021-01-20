AFRAME.registerComponent('nijlpaardcomponent', {
  init: function(){
    let audio = document.querySelector("#nijlpaardSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
