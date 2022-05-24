document.addEventListener("DOMContentLoaded", () => {
  const path = localStorage.getItem("path");
  const size = localStorage.getItem("imagesize");
  const name = localStorage.getItem("filename");
  const result = localStorage.getItem("result");
  const accuracy = localStorage.getItem("score");
  const font = localStorage.getItem("font");
  document.getElementById("input-image").setAttribute("src", path);
  document.getElementById("size-image").innerHTML =
    "Taille de l'image : " + Math.floor(size / 1024) + " ko";
  document.getElementById("name-image").innerHTML = "Nom du fichier : " + name;
  document.getElementById("result").innerHTML = "Résultat : " + result;
  document.getElementById("Accuracy").innerHTML =
    "Précision : " + accuracy + " %";
  document.getElementById("font").innerHTML = "Fonte : " + font;
});
