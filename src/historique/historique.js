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
                     <span class ="titles" style= "color:#34C924 "> Result : </span> ${item.result} <br><br>
                     <span class ="titles" style= "color:#26C4EC"> Image Size : </span> ${item.imagesize}<br><br>
                     <span class ="titles" style= "color:#F00020"> Font : </span> ${item.font}<br><br>
                     <span class ="titles" style= "color:purple"> Score : </span> ${item.score}
               
               </p>
               </div>

         `;
      }
    }
    document.querySelector(".main-section").innerHTML = output;
  }
};
