var total = 0;
window.addEventListener("load", function(){
    total = document.getElementsByTagName("img").length;

    chrome.runtime.sendMessage({
        badgeText: "NOT NULL HAHAHAHA",
        count: total
    });
});

