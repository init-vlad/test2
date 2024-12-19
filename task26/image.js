const textEl = document.querySelector("#text");

document.querySelector("#add_comment").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const text = textEl.value;

  const url = new URL(location.href);
  const photoID = url.searchParams.get("id");

  fetch("./add_comment.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      text: text,
      photo_id: photoID,
    }),
  })
    .then(async function (response) {
      let data = await response.text();
      console.log("123", data);

      data = JSON.parse(data);
      let new_comment_div = document.createElement("div");
      new_comment_div.classList.add("comment");
      let new_comment_author = document.createElement("p");
      new_comment_author.classList.add("author");
      new_comment_author.innerText = data.author;
      let new_comment_text = document.createElement("p");
      new_comment_text.classList.add("text");
      new_comment_text.innerText = data.text;
      let new_comment_date = document.createElement("p");
      new_comment_date.classList.add("date");
      new_comment_date.innerText = data.created_at;
      new_comment_div.append(
        new_comment_author,
        new_comment_text,
        new_comment_date
      );
      document.querySelector(".comments h2").after(new_comment_div);
      document.querySelector("#text").value = "";
    })
    .finally(() => {});
});
