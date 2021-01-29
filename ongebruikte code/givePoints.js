AFRAME.registerComponent('givepoints', {
    init: function(){
      this.el.addEventListener('click', (clickedAnimal) =>{
        let scoreAddedText = document.createElement("a-text");
        scoreAddedText.setAttribute("id", "js--textIncrease");
        scoreAddedText.setAttribute("increaseText", "");
        scoreAddedText.setAttribute("color", "red");
        scoreAddedText.setAttribute("position", "0 15 0");
        scoreAddedText.setAttribute("scale", "10, 10");
        scoreAddedText.setAttribute("animation", "property: position; to: 0 20 0; easing: linear; dur: 1500");
        scoreAddedText.setAttribute("animation__fade", "property: opacity; from: 1; to: 0; easing: linear; dur: 500; delay: 1000");
        clickedAnimal.target.appendChild(scoreAddedText);
        setTimeout(function () {
          clickedAnimal.target.removeChild(scoreAddedText);
        }, 1500);
      })
    }
  })
