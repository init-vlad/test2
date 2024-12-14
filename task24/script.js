const burgerIcon = document.querySelector(".mobile_icon");
const popup = document.querySelector(".popup");

const openBurger = () => {
  popup.classList.add("open");
};

const closeBurger = () => {
  popup.classList.remove("open");
};

const triggerBurger = () => {
  popup.classList.contains("open") ? closeBurger() : openBurger();
};

document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  e.preventDefault();
  if (e.target.closest(".mobile_icon")) {
    triggerBurger();
    return;
  }

  if (e.target.closest(".popup")) {
    return;
  }

  closeBurger();
});

const addPostForm = document.querySelector(".add-post-form");
const grid = document.querySelector("#grid");

const openPostForm = () => {
  addPostForm.classList.add("open");
};

const closePostForm = () => {
  addPostForm.classList.remove("open");
};

const clearForm = () => {
  addPostForm.querySelectorAll("input").forEach((el) => (el.value = ""));
};

document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  if (e.target.closest(".photo-btn")) {
    console.log(123);
    openPostForm();
    return;
  }

  if (e.target.closest(".close-btn")) {
    closePostForm();
    return;
  }
});

document.addEventListener("submit", (e) => {
  if (!(e.target instanceof Element)) return;

  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  if (!data.capture) {
    data.capture = "Default capture";
  }

  const container = document.createElement("div");
  container.classList.add("photo");
  container.innerHTML = `
    <img src="${data.picture}" alt="">
    <p>${data.capture}</p>
  `;
  grid.appendChild(container);

  closePostForm();
  clearForm();
});

const photoPopup = document.querySelector(".photo-popup");
const photoPopupImg = photoPopup.querySelector("img");

document.body.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  const photo = e.target.closest(".photo");
  if (photo) {
    photoPopup.classList.add("open");
    photoPopupImg.src = photo.querySelector("img").src;
    return;
  }

  photoPopup.classList.remove("open");
});
