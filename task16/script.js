let links = document.querySelectorAll("header a");

links.forEach((link) => {
  link.addEventListener("click", async function (e) {
    e.preventDefault();
    let href = this.href;
    let data = await fetch(href);
    document.querySelector("#container").innerHTML = await data.text();

    let hash =
      this.getAttribute("data-hash") || href.split(".")[0].split("/").pop();
    window.location.hash = hash;
  });
});

async function start() {
  let hash = window.location.hash.substr(1) || "main";

  let data = await fetch(`${hash}.html`);
  console.log(data);
  document.querySelector("#container").innerHTML = await data.text();
}

window.addEventListener("hashchange", start);

start();
