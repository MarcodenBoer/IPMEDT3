const animals = document.getElementsByClassName('animals');

for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener('click', function(evt){animals[i].components.sound.playSound();
  console.log(i);})
}
