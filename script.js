document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-button');
    const loginModal = document.getElementById('login-modal');
    const termsModal = document.getElementById('terms-modal');
    const acceptTermsButton = document.getElementById('accept-terms');
    const mainContent = document.getElementById('main-content');
    // Mostrar el modal de login al hacer clic en el botón de login
    loginButton.addEventListener('click', () => {
        loginModal.classList.remove('hidden');
    });

    // Manejar la aceptación de términos y condiciones
    acceptTermsButton.addEventListener('click', () => {
        termsModal.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    // Manejar el envío del formulario de login (simulado)
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('El sistema de login aun no esta construido.');
        loginModal.classList.add('hidden');
    });


    });
    


    