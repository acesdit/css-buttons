const button = document.getElementById('moveButton');

button.addEventListener('mouseover', () => {
    const randomX = Math.random() * 200 - 100; 
    const randomY = Math.random() * 200 - 100; 
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
