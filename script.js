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

function showTechNonTech(department) {
  document.getElementById('department-boxes').style.display = 'none';
  document.getElementById('tech-non-tech-events').style.display = 'grid';
  document.getElementById('tech-events').style.display = 'none';
  document.getElementById('non-tech-events').style.display = 'none';
  showBackButton('tech-non-tech-events');
}

function showEvents(type) {
  document.getElementById('tech-non-tech-events').style.display = 'none';
  document.getElementById('tech-events').style.display = 'none';
  document.getElementById('non-tech-events').style.display = 'none';
  if (type === 'tech') {
    document.getElementById('tech-events').style.display = 'grid';
    showBackButton('tech-events');
  } else {
    document.getElementById('non-tech-events').style.display = 'grid';
    showBackButton('non-tech-events');
  }
}

function showDepartmentBoxes() {
  document.getElementById('tech-non-tech-events').style.display = 'none';
  document.getElementById('tech-events').style.display = 'none';
  document.getElementById('non-tech-events').style.display = 'none';
  document.getElementById('department-boxes').style.display = 'grid';
  hideBackButton();
}

function showBackButton(sectionId) {
  const backButton = document.querySelector(`#${sectionId} .back-button`);
  if (backButton) {
    backButton.style.display = 'inline-block';
  }
  
  // Hide back button in department boxes
  if (sectionId === 'department-boxes') {
      hideBackButton();
  }
}

function hideBackButton() {
  const backButtons = document.querySelectorAll('.back-button');
  backButtons.forEach(button => {
    button.style.display = 'none';
  });
}
