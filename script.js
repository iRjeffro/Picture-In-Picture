const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log('whoops, error occured: ', err);
    }
}

buttonElement.addEventListener('click', async () => {
    // Disable Button
    buttonElement.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    buttonElement.disabled = false;
});

// On Load
selectMediaStream();