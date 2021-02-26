function progress() {
  const closeBtn = document.getElementById('js--clear-logbook');
  const btnBack = document.getElementById('js--animal-back');
  const btnNext = document.getElementById('js--animal-next');
  const wrapper = document.getElementById('js--logbook-wrapper');
  const title = document.getElementById('js--logbook-title');

  window.collectedAnimals = []; //maakt een global array aan

  function showLogbook() {
    scanned = true;
    logbook.style.display = "block";
    closeBtn.style.display = "block";
    if (collectedAnimals.length == 9) {
      title.innerHTML = "Je hebt alle dieren gevangen! Jij bent onze Hospital Hero";
    }
    else if (collectedAnimals.length == 0) {
      title.innerHTML = "Je hebt helaas nog geen dieren gevangen";
    }
    else {
      title.innerHTML = "Je hebt al " + collectedAnimals.length + " van de 9 dieren gevangen";
    }
    btn.style.display = "none";

    caughtAnimals();
  }

  function closeLogbook(){
    scanned = false;
    logbook.style.display = "none";
    closeBtn.style.display = "none";

    btn.style.display = "block";

    //Verwijderd alle elmenten met de class animalBtn die aangemaakt wordt in caughtAnimals
    let animalBtn = document.getElementsByClassName("animalBtn");
    while(animalBtn[0]) {
      animalBtn[0].parentNode.removeChild(animalBtn[0]);
    }
  }

  function caughtAnimals() {
    //Maakt een button aan per element in de array
    for (var i = 0; i < collectedAnimals.length; i++) {
      let btnAnimal = document.createElement("button"); //maakt button
      let name = collectedAnimals[i].toString(); //veranderd de waarden van de array naar een string
      name = name.split("AnimalInfo"); //split de array want er staat veek nutteloze info in
      name = name[0]; //pakt de naam
      name = name.replace("function create", ""); //verwijderd de nutteloze info bij de naam
      btnAnimal.setAttribute('class', 'animalBtn'); //geeft de btn een class om het later weer te kunnen verwijderen
      btnAnimal.textContent = name; //zet de naam van de button
      btnAnimal.onclick = collectedAnimals[i]; //kan nu op de button kliken om het dier te zien

      //Button stylen
      btnAnimal.style.backgroundColor = "#386362";
      btnAnimal.style.color = "white";
      btnAnimal.style.width = "140px";
      btnAnimal.style.height = "40px";
      btnAnimal.style.border = "none";
      btnAnimal.style.fontSize = "20px";


      wrapper.appendChild(btnAnimal); //Button toevoegen aan de html als logbook > wrapper > button <-- dit is de button die toegevoegd is
    }
  }


  btn.addEventListener("click", showLogbook);
  closeBtn.addEventListener("click", closeLogbook);
}

window.addEventListener("load", progress);
