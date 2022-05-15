document.addEventListener("DOMContentLoaded", () => {
  const path = localStorage.getItem("path");
  const size = localStorage.getItem("imagesize");
  const name = localStorage.getItem("filename");
  const result = localStorage.getItem("result");
  const accuracy = localStorage.getItem("score");
  const font = localStorage.getItem("font");
  document.getElementById("input-image").setAttribute("src", path);
  document.getElementById("size-image").innerHTML =
    "File size : " + Math.floor(size / 1024) + " ko";
  document.getElementById("name-image").innerHTML = "File name : " + name;
  document.getElementById("result").innerHTML = "Result : " + result;
  document.getElementById("Accuracy").innerHTML = "Accuracy : " + accuracy;
  document.getElementById("font").innerHTML = "Font : " + font;
});
