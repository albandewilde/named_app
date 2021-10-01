const fs = window.__TAURI__.fs;

var main = () => {
    const app = document.getElementById("app")
    app.innerHTML = "Loading files..."

    displayFiles(app)
}

var displayFiles = (node) => {
    fs.readDir("./").then((files) => {
        let list = document.createElement("ul")
        for (const file of files) {
            let line = document.createElement("li")
            line.innerHTML = file.name
            list.appendChild(line)
        }
        node.innerHTML = ""
        node.appendChild(list)
    })
}

window.addEventListener("load", main)
