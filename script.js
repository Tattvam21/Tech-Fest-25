document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (themeToggle) {
    themeToggle.addEventListener("click", function (e) {
      e.preventDefault();
      body.classList.toggle("light-theme");
      if (body.classList.contains("light-theme")) {
        this.innerHTML =
          '<i class="fa fa-moon" aria-hidden="true"></i><span>Theme</span>';
      } else {
        this.innerHTML =
          '<i class="fa fa-sun" aria-hidden="true"></i><span>Theme</span>';
      }
    });
  }
});

function toggleEvents() {
  const techEvents = document.getElementById("tech-events");
  const nonTechEvents = document.getElementById("non-tech-events");
  const btn = document.getElementById("toggle-btn");

  if (techEvents.style.display !== "none") {
    techEvents.style.display = "none";
    nonTechEvents.style.display = "grid";
    btn.textContent = "Show Tech Events";
  } else {
    techEvents.style.display = "grid";
    nonTechEvents.style.display = "none";
    btn.textContent = "Show Non-Tech Events";
  }
}
