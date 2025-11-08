// Polyfill for Firefox compatibility
if (typeof browser === "undefined") {
    var browser = chrome;
}

browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "github",
        title: "Find on Github",
        type: "normal",
        contexts: ["selection"]
    });
    
    browser.contextMenus.create({
        id: "wikipedia",
        title: "Find on Wiki",
        type: "normal",
        contexts: ["selection"]
    });
    
    browser.contextMenus.create({
        id: "stackoverflow",
        title: "Find on StackOverflow",
        type: "normal",
        contexts: ["selection"]
    })

    browser.contextMenus.create({
        id: "pypi",
        title: "Find on PyPI",
        type: "normal",
        contexts: ["selection"]
    })

    browser.contextMenus.create({
        id: "reddit",
        title: "Find on Reddit",
        type: "normal",
        contexts: ["selection"]
    })
    
    browser.contextMenus.create({
        id: "pinterest",
        title: "Find on Pinterest",
        type: "normal",
        contexts: ["selection"]
    })

    
});

browser.contextMenus.onClicked.addListener((info) => {
    const query = info.selectionText
    var url = ``;
    
    switch (info.menuItemId) {
        case "github":
            url = `https://github.com/search?q=${encodeURIComponent(query)}&type=repositories`;
            break;
        case "wikipedia":
            url = `https://wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;
            break;
        case "pinterest":
            url = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}&rs=typed`;
            break;
        case "pypi":
            url = `https://pypi.org/search/?q=${encodeURIComponent(query)}`;
            break;
        case "stackoverflow":
            url = `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`;
            break;
        case "reddit":
            url = `https://www.reddit.com/search/?q=${encodeURIComponent(query)}`;
            break;
    }

    if (url != ``){
        browser.tabs.create({ url })
    }
});