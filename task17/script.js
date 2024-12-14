const fetchNewData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".grid");

  const doAsync = async () => {
    const data = await fetchNewData();

    const content = data
      .map(
        (d) => `<div class="card">
      <div class="title">Title: ${d.title}</div>
      <div>Body: ${d.body}</div>
    </div>`
      )
      .join("");

    container.innerHTML = content;
  };

  doAsync();
});
