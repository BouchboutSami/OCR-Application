var qst = document.getElementsByClassName("titre_quest");
var rep = document.getElementsByClassName("rep");
var shif = document.getElementsByClassName("hamax");
for (let i = 0; i < qst.length; i++) {
  qst[i].addEventListener("click", () => {
    console.log("hamasx");
    for (var j = 0; j < rep.length; j++) {
      console.log(j, i);
      if (j == i) {
        shif[j].style.transform = "rotate(180deg)";
        rep[j].style.display = "flex";
      } else {
        rep[j].style.display = "none";
        shif[j].style.transform = null;
      }
    }
  });
}
