window.onload = () => {
  const takePhoto = document.getElementById('js--camera');
  let snapshot = document.getElementById( "snapshot" );
  let capture = document.getElementById( "capture" );
  let video = document.getElementById('arjs-video'); //Pakt de camera van aframe ar
  let download = document.getElementById('js--download');


  function captureSnapshot() {

  	const ctx = capture.getContext( '2d' );
  	let img = new Image();

  	ctx.drawImage( video, 0, 0, capture.width, capture.height ); //Failed to execute 'drawImage' deze error komt soms voor, weet niet waarom

  	img.src		= capture.toDataURL( "image/jpeg" );
  	img.width	= 240;

  	snapshot.innerHTML = '';

  	snapshot.appendChild(img);
    download.setAttribute("href", img.src);
  }

  takePhoto.addEventListener("click", captureSnapshot);
}
