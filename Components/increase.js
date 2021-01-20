function animateValue(id, start, end, duration) {
      if (start === end) return;
      let range = end - start;
      let current = start;
      let increment = end > start? 1 : +1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let obj = document.getElementById(id);
      let timer = setInterval(function() {
          current += increment;
          obj.setAttribute("value", current);
          console.log(current);
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
  }

  AFRAME.registerComponent('increasetext', {
    init: function(){
      console.log("testLog");
      animateValue("js--textIncrease", 0, 100, 500);
    }
  })
