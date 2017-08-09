var pictures = ["assets/img/a1.jpg", "assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var contendorImg = document.getElementById("imgJS");

for (var i = 0; i < pictures.length; i++) {
    var img = document.createElement("img");
    img.src = pictures[i];
    img.setAttribute("class","bordes");
    contendorImg.appendChild(img);
}