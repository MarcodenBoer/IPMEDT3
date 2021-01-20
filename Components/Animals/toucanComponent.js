AFRAME.registerComponent('toucancomponent', {
  init: function(){
    let audio = document.querySelector("#toucanSound");
    this.el.addEventListener('click', () =>{
      audio.play();
    })
  }
})
