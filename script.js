/*document.addEventListener('DOMContentLoaded', function () {
    // Función para navegar suavemente entre secciones o redirigir a otra página
    function navigateToSection(sectionId, pageUrl) {
        var section = document.getElementById(sectionId);

        // Si la sección existe en la página actual, desplázate suavemente
        if (section) {
            console.log('Sección encontrada. Desplazándose a:', sectionId);
            setTimeout(function () {
                section.scrollIntoView({ behavior: 'smooth' });
            }, 100); // Añadimos un pequeño retraso antes del desplazamiento
        }
        // Si no, navega a la otra página
        else if (pageUrl) {
            console.warn('Sección no encontrada. Redirigiendo a:', pageUrl);
            window.location.href = pageUrl;
        } else {
            console.error('Ni la sección ni la URL proporcionada.');
        }
    }

    // Agrega un evento de clic al botón de "Productos"
    var productosButton = document.querySelector('.productos-button');
    if (productosButton) {
        productosButton.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            console.log('Botón de Productos clicado');
            navigateToSection('productos-recomendados', 'productos.html'); // ID de la sección de productos y URL de la otra página
        });
    } else {
        console.error('Botón de "Productos" no encontrado.');
    }
});

*/
document.addEventListener('DOMContentLoaded', function () {
    // Agrega un evento de clic al botón de "Productos"
    var productosButton = document.querySelector('.productos-button');
    if (productosButton) {
        productosButton.addEventListener('click', function () {
            window.location.href = 'productos.html'; // Redirige directamente a la otra página
        });
    } else {
        console.error('Botón de "Productos" no encontrado.');
    }
});


