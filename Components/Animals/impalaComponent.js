AFRAME.registerComponent('impalacomponent', {
  init: function(){
    let audio = document.querySelector("#impalaSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
