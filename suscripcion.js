document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.getElementById('openModalButton');
    const messageDiv = document.getElementById('message');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModalButton');

    subscribeButton.addEventListener('click', function() {
        const email = emailInput.value;

        // Verifica que el campo de email no esté vacío
        if (email) {
            // Limpia el input de email
            emailInput.value = '';

            // Muestra el modal
            modalOverlay.style.display = 'block';
            modal.style.display = 'block';
        } else {
            // Si el campo de email está vacío, muestra una alerta
            alert('Por favor, introduce una dirección de correo válida.');
        }
    });

    // Función para cerrar la ventana emergente
    closeModalButton.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    });

    // Cerrar la ventana emergente al hacer clic en el fondo oscuro
    modalOverlay.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    });
});