AFRAME.registerComponent('pandacomponent', {
  init: function(){
    let audio = document.querySelector("#pandaSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
