var image = document.getElementById("button-upload");
const fs = require("fs");
const path = require("path");
let conten = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../historique/hist.json"), {
    encoding: "utf8",
    flag: "r",
  })
);
image.addEventListener(
  "change",
  async function (event) {
    file = this.files[0];
    await fetch("http://127.0.0.1:8000/corr/?img_path=" + file.path)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        localStorage.setItem("font", data.font);
        localStorage.setItem("score", data.score);
        localStorage.setItem("result", data.result);
      });
    let elementToSave = {
      imagesize: file.size,
      result: localStorage.getItem("result"),
      font: localStorage.getItem("font"),
      score: localStorage.getItem("score"),
      path: file.path,
      filename: file.filename,
    };
    conten.unshift(elementToSave);
    fs.writeFileSync(
      path.resolve(__dirname, "../historique/hist.json"),
      "\n" + JSON.stringify(conten, "\t", 2)
    );
    localStorage.setItem("filename", file.name);
    localStorage.setItem("imagesize", file.size);
    localStorage.setItem("path", file.path);
    window.location.href = "../display-result/display-result.html";
  },
  false
);
