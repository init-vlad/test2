document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;

    const container = e.target.closest(".carousel");
    if (!container) return;

    let selectedIndex = container?.selectedIndex || 0;

    const prevI = selectedIndex;
    const imgs = container.querySelectorAll("img");

    if (e.target.closest(".next")) {
      selectedIndex = (selectedIndex + 1) % imgs.length;
    }

    if (e.target.closest(".prev")) {
      selectedIndex = Math.abs((selectedIndex - 1) % imgs.length);
    }

    if (selectedIndex === prevI) return;

    imgs[prevI].classList.remove("selected");
    imgs[selectedIndex].classList.add("selected");

    container.selectedIndex = selectedIndex;
  });
});
