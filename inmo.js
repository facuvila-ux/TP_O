let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length; // 2 slides en total
const slideContainer = document.getElementById('carousel-slide');

// Control de los botones "Prev" y "Next"
document.getElementById('prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--; // Mueve al slide anterior
    } else {
        currentSlide = totalSlides - 1; // Si estamos en el primer slide, vuelve al último
    }
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++; // Mueve al siguiente slide
    } else {
        currentSlide = 0; // Si estamos en el último slide, vuelve al primero
    }
    updateCarousel();
});

// Función que actualiza la posición del carrusel
function updateCarousel() {
    const offset = -currentSlide * 100; // Mueve el carrusel un 100% del ancho de un slide
    slideContainer.style.transform = `translateX(${offset}%)`;
}