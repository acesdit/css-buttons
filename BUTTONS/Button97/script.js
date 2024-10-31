const button = document.getElementById("slipButton");

// Make button slip away on hover
button.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  // Move button to a random position within the viewport
  button.style.position = "absolute";
  button.style.left = Math.random() * maxX + "px";
  button.style.top = Math.random() * maxY + "px";
});
