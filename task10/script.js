document.querySelector("h1").innerHTML = "Hello World!";
document.querySelector("img").src = "../assets/img.jpg";

const p = document.querySelector("p");
p.textContent += ", some text from js";

document.body.innerHTML += `<div></div>`;

const div = document.querySelector("div");
div.style.width = "100px";
div.style.height = "100px";
div.setAttribute(
  "style",
  "width: 100px; height: 100px; border: 2px solid #ldldld; backgroud: black"
);

div.innerHTML = "<p>some text from js</p>";
