const checkboxes = document.querySelectorAll('.customCheckBoxInput');
const messageDiv = document.getElementById('message');
const emojiDiv = document.getElementById('emoji');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateMessage);
});

function updateMessage() {
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    messageDiv.classList.remove('licking-animation'); // Resetting animation class
    emojiDiv.classList.remove('licking-animation'); // Resetting animation class

    if (checkedCount === 1) {
        messageDiv.textContent = "You're onto something";
        messageDiv.style.display = "block";
        emojiDiv.style.display = "none"; // Hide emoji if not all checkboxes are checked
    } else if (checkedCount === 2) {
        messageDiv.textContent = "You're Very Close";
        messageDiv.style.display = "block";
        emojiDiv.style.display = "none"; // Hide emoji if not all checkboxes are checked
    } else if (checkedCount === 3) {
        messageDiv.textContent = "Wallahi! You got the Secret Sauce!";
        messageDiv.style.display = "block";
        emojiDiv.style.display = "block"; // Show emoji when all checkboxes are checked
        emojiDiv.classList.add('licking-animation'); // Adding animation class
    } else {
        messageDiv.style.display = "none"; // Hide message if no checkboxes are checked
        emojiDiv.style.display = "none"; // Hide emoji if no checkboxes are checked
    }
}