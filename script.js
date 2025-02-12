document.addEventListener('DOMContentLoaded', () => {
    const text = "Tervetuloa sivuilleni!";
    const animatedText = document.getElementById('animated-text');

    // Tarkistetaan näytön leveys ennen animaation käynnistämistä
    if (window.innerWidth >= 768) {
        let index = 0;

        function type() {
            if (index < text.length) {
                animatedText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust the typing speed (milliseconds)
            }
        }

        type(); // Käynnistetään animaatio vain, jos näyttö on tarpeeksi suuri
    } else {
        animatedText.style.display = "none"; // Piilotetaan teksti mobiilissa
    }
});
