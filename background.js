chrome.contextMenus.create({
  id: "dna",
  title: "dna this page"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
    chrome.tabs.executeScript({
      file: "dna.js"
    });
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        replacement: "Sound from the add-on!"
      });
    });
  }
});



