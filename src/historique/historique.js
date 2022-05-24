const { fstat } = require("original-fs");
const fs = require("fs");

let http = new XMLHttpRequest();
http.open("get", "hist.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      if (fs.existsSync(item.path)) {
        output += `
               <div class="element"> 
               <img src="${item.path}" alt="Image deleted" class="imgTreated" >
               <p class="description">  
                     <span class ="titles" style= "color:black "> Résultat : </span> ${
                       item.result
                     } <br><br>
                     <span class ="titles" style= "color:black"> Taille de l'image : </span> ${Math.floor(
                       item.imagesize / 1024
                     )} ko <br><br>
                     <span class ="titles" style= "color:black"> Font : </span> ${
                       item.font
                     }<br><br>
                     <span class ="titles" style= "color:black"> Précision : </span> ${
                       item.score
                     }
               
               </p>
               </div>

         `;
      }
    }
    document.querySelector(".main-section").innerHTML = output;
  }
};
