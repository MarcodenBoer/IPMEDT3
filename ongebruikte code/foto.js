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


//html-Code

// <!-- FOTOS MAKEN -->
// <!-- <button id="js--camera" style="position: absolute; left: 50%; bottom: 50px; transform: translateX(-50%); border-radius: 100%; height: 100px; width: 100px; font-size: 50px; color: white; background-color: #386362; border: white 5px solid; z-index: 2;" type="button" name="button"><i class="fas fa-camera"></i></button>
// <section id="snapshot" style="position: absolute; width: 90vw; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 8px; background-color: #fa9d44; color: white; display: none; grid-template-areas: 'afbeelding' 'cancel' 'download'; row-gap: 20px; z-index: 2;">
//   <canvas id="capture" width="320" height="240"></canvas> <!-- de height en width worden via js aangepast -->
//   <!-- <div id="js--image" style="grid-area: afbeelding; width: 100%; padding-bottom: 25px"></div>
//   <a id="js--download" style="grid-area: download; width: 100%; font-size: 25px; padding: 15px 0px; color: white; background-color: #386362; z-index: 2; text-align: center;" href="" download="download"><i class="fas fa-download" style="padding-right: 15px;"></i>Downloaden</a>
//   <div id="js--cancel" style="grid-area: cancel; width: 100%; font-size: 25px; padding: 15px 0px; color: white; background-color: #386362; z-index: 2; text-align: center;"><i class="fas fa-times" style="padding-right: 15px;"></i>Annuleren</div>
// </section> -->
