const soundButton = document.getElementById('soundButton');
const clickSound = document.getElementById('clickSound');

soundButton.addEventListener('click', () => {
  clickSound.currentTime = 0; // Reset sound if already playing
  clickSound.play();
});
