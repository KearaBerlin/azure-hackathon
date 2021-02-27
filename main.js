function startCameraAccess() {
  const videoElement = document.getElementById('localVideo');
  const constraints = {
    video: true,
    //audio: true,
  }
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    videoElement.srcObject = stream;
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cameraAccessButton')
    .addEventListener('click', startCameraAccess);
});

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
// if (hasGetUserMedia()) {
//   window.alert("Your browser supports getUserMedia() - yay! :)");
// } else {
//   window.alert("getUserMedia() is not supported by your browser");
// }
