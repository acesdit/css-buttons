const beerFill = document.querySelector('.beer-fill');
const overflowMessage = document.querySelector('.overflow');
const pourButton = document.querySelector('.pour-btn');

let currentHeight = 0; // Current height of beer (in %)
const maxHeight = 100; // Maximum height of the glass

pourButton.addEventListener('click', () => {
  if (currentHeight < maxHeight) {
    currentHeight += 20; // Increase beer level by 20%
    beerFill.style.height = `${currentHeight}%`;

    // Check if it reaches the top
    if (currentHeight >= maxHeight) {
      overflowMessage.style.display = 'block'; // Show overflow message
    }
  } else {
    alert('The beer is already overflowing! 🍺');
  }
});
