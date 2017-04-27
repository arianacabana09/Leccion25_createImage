function creandoDiv(getURL) {
  var contenedor = document.getElementById("contenedor");
  var div = document.createElement("div");
  var img = document.createElement("img");
  var icon = document.createElement("img");
  var icon2 = document.createElement("img");

  img.setAttribute("src", getURL);
  img.setAttribute("id","image");
  // flechas opciones
  icon.setAttribute("src","assets/img/collapse-arrow.png");
  icon.setAttribute("id","collapse-arrow");
  icon.setAttribute("class","icon-arrow");
  icon2.setAttribute("src","assets/img/expand-arrow.png");
  icon2.setAttribute("id","expand-arrow");
  icon2.setAttribute("class","icon-arrow");

  div.classList.add("contenedor-image");
  div.appendChild(img);
  div.appendChild(icon);
  div.appendChild(icon2);
  contenedor.appendChild(div);

  var arriba = document.getElementById("collapse-arrow");
   arriba.addEventListener("click",function(){
    icon.style.display = "none";
   });
}

var inputURL = document.getElementById("url");
function getURL(e){
  if(e.keyCode==13){
    creandoDiv(this.value);
    this.value = "";
  }
}



inputURL.onkeydown = getURL;
