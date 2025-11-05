function searchingOnGithub() {
    const editTextLable = document.getElementById("searchTextEdit");
    if (editTextLable) {
        const text_value = editTextLable.value
        if (text_value != "") {
            const url = `https://github.com/search?q=${encodeURIComponent(text_value)}&type=repositories`;
            chrome.tabs.create({ url });
        }
    }
}

const searchButton_btn = document.getElementById("searchButton");

if (searchButton_btn) {
    searchButton_btn.addEventListener("click", searchingOnGithub)
}
