document.addEventListener('DOMContentLoaded', () => {
    const text = "Tervetuloa sivuilleni!";
    const animatedText = document.getElementById('animated-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            animatedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the typing speed (milliseconds)
        }
    }

    // Start typing animation
    type();
});
