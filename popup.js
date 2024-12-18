// popup.js
document.getElementById('toggle-pip').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) {
            console.log('popup.js got triggered!');
            chrome.tabs.sendMessage(tabs[0].id, {action: "togglePiP"}, (response) => {
                if (chrome.runtime.lastError) {
                    console.error('Error sending message:', chrome.runtime.lastError.message);
                }
            });
        } else {
            console.warn('No active tab found.');
        }
    });
}); 