// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "togglePiP") {
        console.log('Message received in background.js');
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: togglePictureInPicture
            });
        });
    }
});

function togglePictureInPicture() {
    const video = document.querySelector('video');
    if (video) {
        video.requestPictureInPicture().catch(error => {
            console.error('Error requesting PiP:', error);
        });
    } else {
        console.warn('No video element found on this page.');
    }
}
