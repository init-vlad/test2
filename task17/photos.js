document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const grid = document.querySelector(".grid");

    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=4"
    );

    const data = await res.json();

    const content = data
      .map(
        (d) => `<div class="card">
                  <div class="title">Title: ${d.title}</div>
                  <img src="${d.thumbnailUrl}" />
                </div>`
      )
      .join("");

    grid.innerHTML = content;
  })();
});
