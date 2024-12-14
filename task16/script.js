const changeContentToPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return () => {
    const grid = document.querySelector(".grid");
    const content = data
      .map(
        (d) => `<div class="card">
      <div class="title">Title: ${d.title}</div>
      <div>Body: ${d.body}</div>
    </div>`
      )
      .join("");

    grid.innerHTML = content;
  };
};

const changeContentToPhotos = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=4"
  );

  const data = await res.json();

  return () => {
    const grid = document.querySelector(".grid");
    const content = data
      .map(
        (d) => `<div class="card">
                  <div class="title">Title: ${d.title}</div>
                  <img src="${d.thumbnailUrl}" />
                </div>`
      )
      .join("");

    grid.innerHTML = content;
  };
};

document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const setPostsContent = await changeContentToPosts();
    const setPhotosContent = await changeContentToPhotos();

    document.addEventListener("click", (e) => {
      if (!(e.target instanceof Element)) return;

      const link = e.target.closest("a");
      if (!link) return;

      e.preventDefault();

      if (link.classList.contains("photos")) {
        setPhotosContent();
      } else if (link.classList.contains("about")) {
        (async () => {
          const res = await fetch("./about.php");
          const data = await res.text();

          document.querySelector("#root").innerHTML = data;
          console.log(123);
        })();
      } else {
        (async () => {
          const res = await fetch("./index.php");
          const data = await res.text();

          document.querySelector("#root").innerHTML = data;
          console.log(123);
        })();
        setPostsContent();
      }
    });
  })();
});
