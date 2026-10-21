// Highlight navigation when clicked
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav a").forEach(a => a.style.color = "#ffcc00");
    link.style.color = "#00ffcc"; // highlight active link
  });
});

// Add a welcome alert when page loads
window.onload = function() {
  alert("Welcome to Kingsman Leather! Explore our premium collection.");
};

// Simple image slideshow logic
let images = document.querySelectorAll("img");
let index = 0;

function highlightImage() {
  images.forEach(img => img.style.borderColor = "#444"); // reset
  images[index].style.borderColor = "#00ffcc"; // highlight current
  index = (index + 1) % images.length;
}

setInterval(highlightImage, 3000); // change highlight every 3 seconds
