const takePhoto = document.getElementById('js--camera');
const snapshot = document.getElementById( "snapshot" );
let capture = document.getElementById( "capture" );
let download = document.getElementById('js--download');
const cancel = document.getElementById('js--cancel');
let image = document.getElementById('js--image');

capture.style.display = "none";
takePhoto.style.display = "none"; //Mobiel support getDisplayMedia nog niet dus wordt de knop om foto's te maken niet ingeladen

const takeScreenShot = async() => {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: {mediaSource: "screen"}
  });

  const track = stream.getVideoTracks()[0];
  const frame = new ImageCapture(track);
  const bitmap = await frame.grabFrame();

  track.stop();

  capture.width = bitmap.width;
  capture.height = bitmap.height;

  const context = capture.getContext('2d');
  context.drawImage(bitmap, 0, 0, 790, bitmap.height/2);
  const img = capture.toDataURL("image/jpeg");

  download.setAttribute("href", img);
  displayPhoto();

};

function displayPhoto(){
  let img = new Image();
  img.setAttribute("src", capture.toDataURL("image/jpeg"));
  image.innerHTML = "";
  image.appendChild(img);

  img.style.display = "block";
  img.style.width = "100%";

  snapshot.style.display = "grid";
}

function photoDisplayed() {
  snapshot.style.display = "none";
  takePhoto.style.display = "block";
}

takePhoto.addEventListener("click", takeScreenShot);
download.addEventListener("click", photoDisplayed);
cancel.addEventListener("click", photoDisplayed);
