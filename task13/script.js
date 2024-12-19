const inp = document.querySelector("input");

const cleanError = () => {
  if (!parseFloat(inp.value)) {
    inp.value = "";
  }
};

document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  const num = e.target.closest(".num");
  if (num) {
    cleanError();
    inp.value += num.textContent;
  }

  const op = e.target.closest(`[data-op]`);
  if (op) {
    cleanError();
    if (!inp.value || inp?.op) return;

    inp.prev = inp.value;
    inp.op = op.dataset.op;
    inp.value = "";
  }

  if (e.target.closest("#res")) {
    if (!inp.value || !inp.op || !inp.prev) return;

    const res = eval(inp.prev + inp.op + inp.value);
    inp.value = res === Infinity ? "error" : res || "error";
    inp.prev = "";
    inp.op = "";
  }

  if (e.target.closest("#pow")) {
    cleanError();
    inp.value = parseFloat(inp.value) ** 2;
  }

  if (e.target.closest("#sqr")) {
    cleanError();
    inp.value = parseFloat(inp.value) ** 0.5;
  }
});
