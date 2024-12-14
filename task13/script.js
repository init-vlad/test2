const inp = document.querySelector("input");

document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  const num = e.target.closest(".num");
  if (num) {
    inp.value += num.textContent;
  }

  const op = e.target.closest(`[data-op]`);
  if (op) {
    if (!inp.value || inp?.op) return;

    inp.prev = inp.value;
    inp.op = op.dataset.op;
    inp.value = "";
  }

  if (e.target.closest("#res")) {
    if (!inp.value || !inp.op || !inp.prev) return;

    inp.value = eval(inp.prev + inp.op + inp.value);
    inp.prev = "";
    inp.op = "";
  }

  if (e.target.closest("#sqr")) {
    inp.value = parseFloat(inp.value) ** 0.5;
  }
});
