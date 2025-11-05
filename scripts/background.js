chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchGithub",
        title: "Find on Github",
        type: "normal",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "searchGithub"){
        const query = info.selectionText;
        const url = `https://github.com/search?q=${encodeURIComponent(query)}&type=repositories`;
        chrome.tabs.create({ url })
    }
});