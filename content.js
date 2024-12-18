// content.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "togglePiP") {
        console.log('Received togglePiP message in content script');
        const video = document.querySelector('video');
        if (video) {
            if (document.pictureInPictureElement) {
                // Exit PiP if already in PiP mode
                document.exitPictureInPicture().catch(error => {
                    console.error('Error exiting PiP:', error);
                });
            } else {
                // Request PiP mode
                video.requestPictureInPicture().catch(error => {
                    console.error('Error requesting PiP:', error);
                });
            }
        } else {
            console.warn('No video element found on this page.');
        }
    }
});
