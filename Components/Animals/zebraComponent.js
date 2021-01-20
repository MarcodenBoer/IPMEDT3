AFRAME.registerComponent('zebracomponent', {
  init: function(){
    let audio = document.querySelector("#zebraSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
