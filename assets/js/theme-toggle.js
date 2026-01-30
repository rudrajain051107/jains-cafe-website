(() => {
  const btn = document.getElementById("themeToggleBtn");
  const storageKey = "jains-cafe-theme";

  const systemPrefersDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const applyTheme = (theme) => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  // Initial load
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(systemPrefersDark() ? "dark" : "light");
  }

  // Toggle on click
  btn.addEventListener("click", () => {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";

    const newTheme = isLight ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  });
})();