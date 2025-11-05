function searchingOnGithub() {
    const editTextLable = document.getElementById("searchTextEdit");
    if (editTextLable) {
        const query = editTextLable.value
        if (query != "") {
            const selectedOption = selectOptions_select.value
            var url = ``;
            switch (selectedOption) {
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
                chrome.tabs.create({ url });
            }
        }
    }
}

const searchButton_btn = document.getElementById("searchButton");
const selectOptions_select = document.getElementById("selectValue");

if (searchButton_btn) {
    searchButton_btn.addEventListener("click", searchingOnGithub)
}