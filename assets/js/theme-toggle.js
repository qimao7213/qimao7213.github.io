(function () {
  var storageKey = "homepage-theme";
  var button = document.querySelector(".theme-toggle");
  var icon = button.querySelector("i");
  var savedTheme = localStorage.getItem(storageKey);

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var isDark = theme === "dark";
    button.setAttribute("aria-label", isDark ? "切换为明亮模式" : "切换为深色模式");
    button.setAttribute("title", isDark ? "切换为明亮模式" : "切换为深色模式");
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  }

  setTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  button.addEventListener("click", function () {
    var nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  });
}());
