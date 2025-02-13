let headerNet, eventsRings, scheduleBirds, historyBirds, sponsorsRings;

// Get the video elements and the overlay element
// JavaScript code for handling video and text animations
const firstVideo = document.getElementById('first-video');
const heroTitle = document.querySelector('.hero-title');
const heroSlogan = document.querySelector('.hero-slogan');
const registerBtn = document.querySelector('.btn');

// Set the animation delay for the text
setTimeout(() => { 
    heroTitle.style.opacity = '1';  // Show title after 1 second
    heroTitle.classList.add('fadeInUp');
    
    heroSlogan.style.opacity = '1';  // Show slogan after 1 second
    heroSlogan.classList.add('fadeInUp');
    
    registerBtn.style.opacity = '1';  // Show button after 1.5 seconds
    registerBtn.classList.add('fadeInUp');
}, 1000); // 1 second delay



const initializeVanta = (element) => {
  const vantaOptions = {
    el: element,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: document.body.classList.contains('light-theme') ? 0xf9f9f9 : 0x0a0b1e,
    color: document.body.classList.contains('light-theme') ? 0x333333 : 0x5c6bc0,
    backgroundAlpha: 0.5,
    ringSize: 1,
    rotationMultiplier: 0.05
  };

  if (element === "#headerL") {
    if (headerNet) headerNet.destroy();
    headerNet = VANTA.NET(vantaOptions);
  } else if (element === "#events") {
    if (eventsRings) eventsRings.destroy();
    eventsRings = VANTA.RINGS(vantaOptions);
  } else if (element === "#sponsors") {
    if (sponsorsRings) sponsorsRings.destroy();
    sponsorsRings = VANTA.RINGS(vantaOptions);
  }

   const birdsOptionsSchedule = {
    el: "#schedule",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: document.body.classList.contains('light-theme') ? 0xf9f9f9 : 0x0a0b1e,
    color: document.body.classList.contains('light-theme') ? 0x333333 : 0x5c6bc0,
    quantity: 3
  };

  if (scheduleBirds) scheduleBirds.destroy();
  scheduleBirds = VANTA.BIRDS(birdsOptionsSchedule);

   const birdsOptionsHistory = {
    el: "#history",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
     backgroundColor: document.body.classList.contains('light-theme') ? 0xf9f9f9 : 0x0a0b1e,
    color: document.body.classList.contains('light-theme') ? 0x333333 : 0x5c6bc0,
    quantity: 3
  };

  if (historyBirds) historyBirds.destroy();
  historyBirds = VANTA.BIRDS(birdsOptionsHistory);
};

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

document.addEventListener('DOMContentLoaded', () => {
  initializeVanta("#headerL");
  initializeVanta("#events");
  initializeVanta("#sponsors");

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light-theme');
    initializeVanta("#headerL");
    initializeVanta("#events");
    initializeVanta("#sponsors");
  });
});
