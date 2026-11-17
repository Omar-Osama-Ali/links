(() => {
  "use strict";
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("omar-linkhub-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    localStorage.setItem("omar-linkhub-theme", theme);
  };
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  toggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  document.getElementById("year").textContent = new Date().getFullYear();
})();