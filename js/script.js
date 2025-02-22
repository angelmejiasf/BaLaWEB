document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let direction = 1; // 1 para avanzar, -1 para retroceder
    const slides = document.querySelectorAll('.slide');

    function moveSlide(n) {
        slides[slideIndex].classList.remove('active');
        slideIndex += n;

        // Revertir dirección al llegar a los extremos
        if (slideIndex >= slides.length - 1) {
            direction = -1;
        } else if (slideIndex <= 0) {
            direction = 1;
        }

        slides[slideIndex].classList.add('active');

        // Mueve el carrusel
        document.querySelector('.carousel-container').style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    // Cambio automático cada 3 segundos en ambas direcciones
    setInterval(() => moveSlide(direction), 3000);

    // Asignar eventos a los botones manuales
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});



function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}


// Para la musica pagina principal 
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    audio.play().catch(error => console.log("Autoplay bloqueado: " + error));
});
