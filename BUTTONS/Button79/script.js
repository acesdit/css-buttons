const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

let spinning = false;

spinButton.addEventListener('click', spinWheel);

function spinWheel() {
  if (spinning) return;  // Prevent double-clicking to spin

  spinning = true;
  const randomDegree = Math.floor(Math.random() * 360) + 1080; // At least 3 full spins
  wheel.style.transition = 'transform 5s cubic-bezier(0.33, 1, 0.68, 1)';
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  // Disable button during spin
  spinButton.disabled = true;

  // Determine the reward when the spin stops
  setTimeout(() => {
    const finalDegree = randomDegree % 360;
    const rewardIndex = Math.floor(finalDegree / 60); // 6 sections, 60 degrees each

    const rewards = [
      'Pizza Slice',
      'Gift Slice',
      'Trophy',
      'Donut',
      'Cash Bag',
      'Surprise Confetti'
    ];

    alert(`Congratulations! You won: ${rewards[rewardIndex]}`);

    // Re-enable button and reset spin state
    spinButton.disabled = false;
    spinning = false;
  }, 5000); // Matches the transition duration
}
