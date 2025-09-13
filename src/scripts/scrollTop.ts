export function setupScrollTopButton() {
  const btnEl = document.getElementById("scroll-top-btn");
  if (!(btnEl instanceof HTMLButtonElement)) return;
  const progressEl = btnEl.querySelector<SVGCircleElement>(".progress");
  if (!progressEl) return;

  const btn = btnEl;
  const progress = progressEl;

  const radius = progress.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  progress.style.strokeDasharray = `${circumference} ${circumference}`;
  progress.style.strokeDashoffset = `${circumference}`;

  function setProgress(value: number) {
    const offset = circumference - value * circumference;
    progress.style.strokeDashoffset = `${offset}`;
  }

  function update() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
    setProgress(ratio);
    if (scrollTop > 200) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  update();
}
