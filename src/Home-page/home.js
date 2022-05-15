var image = document.getElementById("button-upload");

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
    localStorage.setItem("filename", file.name);
    localStorage.setItem("imagesize", file.size);
    localStorage.setItem("path", file.path);
    window.location.href = "../display-result/display-result.html";
  },
  false
);
