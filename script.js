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

    // Tarkistetaan näytön leveys ennen animaation käynnistämistä
    if (window.innerWidth >= 768) {
        type(); // Käynnistetään animaatio vain, jos näyttö on tarpeeksi suuri
    } else {
        animatedText.textContent = text; // Mobiilissa näytetään vain valmis teksti
    }
});
