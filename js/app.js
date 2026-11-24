
let header = document.getElementById("navbar");

header.style.width = "100%";
header.style.height = "100px";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.padding = "0 100px";
header.style.boxSizing = "border-box";
header.style.backgroundColor = "#111";

let logo = document.querySelector("img");

logo.style.width = "100px";

let nav = document.getElementById("nav-links");

nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.gap = "60px";
nav.style.listStyle = "none";

let links = document.querySelectorAll("#nav-links a");

links.forEach((link) => {
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.fontSize = "18px";
    link.style.fontFamily = "Arial";
});
