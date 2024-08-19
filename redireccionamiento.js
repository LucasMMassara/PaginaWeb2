document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID
    const button = document.getElementById('boton_resenias');

    // Añade un evento de clic al botón
    button.addEventListener('click', function() {
        // Redirige a otra página HTML
        window.location.href = 'resenias.html'; // Cambia 'otra-pagina.html' por la ruta a la que quieres redirigir
    });
});