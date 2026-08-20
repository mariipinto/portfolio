(function () {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark-init");
    }
  } catch (e) {}
})();

function initThemeToggle() {
  const body = document.body;
  if (document.documentElement.classList.contains("dark-init")) {
    body.classList.add("dark");
  }
  const btn = document.getElementById("theme-toggle");
  const label = document.getElementById("theme-label");
  function sync() {
    const isDark = body.classList.contains("dark");
    if (label) label.textContent = isDark ? "dark" : "light";
  }
  sync();
  if (btn) {
    btn.addEventListener("click", function () {
      body.classList.toggle("dark");
      try {
        localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
      } catch (e) {}
      sync();
    });
  }

  const navToggle = document.getElementById("nav-toggle");
  const header = document.getElementById("site-header");
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    header.querySelectorAll(".nav-mobile-panel a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", initThemeToggle);
