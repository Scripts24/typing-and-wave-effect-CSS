// Obtener los elementos necesarios
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

// Función para alternar la visibilidad del menú
function toggleMenu() {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
}

// Agregar el evento de clic al botón del menú
menuToggle.addEventListener('click', toggleMenu);