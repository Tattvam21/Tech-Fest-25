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



const initializeVanta = () => {
  const vantaOptionsHeader = {
    el: "#headerL",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: document.body.classList.contains('light-theme') ? 0xf9f9f9 : 0x0a0b1e,
    color: document.body.classList.contains('light-theme') ? 0x333333 : 0x5c6bc0,
  };

  if (headerNet) headerNet.destroy();
  headerNet = VANTA.NET(vantaOptionsHeader);

  const ringsOptions = {
    el: "#events",
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

  if (eventsRings) eventsRings.destroy();
  eventsRings = VANTA.RINGS(ringsOptions);

  const ringsOptionsSponsors = {
    el: "#sponsors",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: document.body.classList.contains('light-theme') ? 0xf0f0f0 : 0x1e1e1e,
    color: document.body.classList.contains('light-theme') ? 0x333333 : 0x5c6bc0,
    backgroundAlpha: 0.5,
    ringSize: 1,
    rotationMultiplier: 0.05,
  };

  if (sponsorsRings) sponsorsRings.destroy();
  sponsorsRings = VANTA.RINGS(ringsOptionsSponsors);

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

document.addEventListener('DOMContentLoaded', () => {
  initializeVanta();

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light-theme');
    initializeVanta();
  });
});
