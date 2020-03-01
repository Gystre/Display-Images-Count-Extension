chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.tabs.get(sender.tab.id, function(tab) {
        if (chrome.runtime.lastError) {
            return;
        }
        if (tab.index >= 0) { //tab is visible
            chrome.browserAction.setBadgeText({tabId:tab.id, text:String(message.count)});
        } else { //prerendered tab
            var tabId = sender.tab.id
            chrome.webNavigation.onCommitted.addListener(function update(details) {
                if (details.tabId == tabId) {
                    chrome.browserAction.setBadgeText({tabId: tabId, text: String(message.count)});
                    chrome.webNavigation.onCommitted.removeListener(update);
                }
            });
        }
    });
});