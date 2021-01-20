window.onload = function (){
  const takePhoto = document.getElementById('js--camera');
  let snapshot = document.getElementById( "snapshot" );
  let capture = document.getElementById( "capture" );
  let video = document.getElementById('arjs-video'); //Pakt de camera van aframe ar
  let download = document.getElementById('js--download');
  let cancel = document.getElementById('js--cancel');
  let image = document.getElementById('js--image');


  function captureSnapshot() {
    video = document.getElementById('arjs-video'); //Soms is de let video niet goed ingeladen en heeft die de waarde null waardoor er een error op line 14 komt.
    capture.setAttribute("width", video.style.width); //pakt de width van de camera
    capture.setAttribute("height", video.style.height); //pakt de hoogte van de camera, hierdoor wordt de img niet uitgerekt
    capture.style.display = "none";

    if (video != null) {
      let ctx = capture.getContext('2d');
      let img = new Image();

      ctx.drawImage( video, 0, 0, capture.width, capture.height ); //Failed to execute 'drawImage' deze error komt soms voor doordat het element video nog niet ingeladen is en dus null terug geeft.

      img.setAttribute("src", capture.toDataURL("image/jpeg"));
      img.setAttribute("width", capture.getAttribute("width"));

      image.innerHTML = "";
      image.appendChild(img);

      download.setAttribute("href", img.getAttribute("src"));

      img.style.display = "block";
      img.style.width = "100%";

      displayPhoto();
    }
  }

  function displayPhoto(){
    snapshot.style.display = "grid";
    takePhoto.style.display = "none";
  }

  function photoDisplayed() {
    snapshot.style.display = "none";
    takePhoto.style.display = "block";
  }

  takePhoto.addEventListener("click", captureSnapshot);
  download.addEventListener("click", photoDisplayed);
  cancel.addEventListener("click", photoDisplayed);

}
