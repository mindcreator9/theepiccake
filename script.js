document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-button');
    const loginModal = document.getElementById('login-modal');
    const termsModal = document.getElementById('terms-modal');
    const acceptTermsButton = document.getElementById('accept-terms');
    const mainContent = document.getElementById('main-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    // Función para mostrar un modal
    function showModal(modal) {
        modal.classList.remove('hidden');
    }

    // Función para ocultar un modal
    function hideModal(modal) {
        modal.classList.add('hidden');
    }

    // Mostrar el modal de login al hacer clic en el botón de login
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            if (loginModal) {
                showModal(loginModal);
            }
        });
    }

    // Manejar la aceptación de términos y condiciones
    if (acceptTermsButton) {
        acceptTermsButton.addEventListener('click', () => {
            if (termsModal) {
                hideModal(termsModal);
            }
            if (mainContent) {
                mainContent.classList.remove('hidden');
            }
        });
    }

    // Manejar el envío del formulario de login (simulado)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('El sistema de login aún no está construido.');
            if (loginModal) {
                hideModal(loginModal);
            }
        });
    }

    // Manejar el botón de menú para dispositivos móviles
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});
