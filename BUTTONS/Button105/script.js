const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Toggle dark and light mode on the body
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Toggle styles on the button
    toggleButton.classList.toggle('dark-mode');
    toggleButton.classList.toggle('light-mode');
});

// Set the initial mode to light mode
body.classList.add('light-mode');
toggleButton.classList.add('light-mode');
