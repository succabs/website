export function setupHamburgerMenu() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-show");
      navLinks.classList.toggle("mobile-hidden");
      hamburgerBtn.classList.toggle("active");
    });
  }
}
