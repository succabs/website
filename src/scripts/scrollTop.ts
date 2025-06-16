export function setupScrollTopButton() {
  const btn = document.getElementById(
    "scroll-top-btn"
  ) as HTMLButtonElement | null;
  if (!btn) return;
  const progress = btn.querySelector<SVGCircleElement>(".progress");
  if (!progress) return;

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
