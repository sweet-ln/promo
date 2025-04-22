
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    const textElement = document.querySelector('.animate-text');
    const textWidth = textElement.scrollWidth; // Obtén el ancho total del texto

    // Ajusta el ancho del contenedor para que coincida con el ancho del texto
    textElement.style.width = textWidth + 'px'; 
});