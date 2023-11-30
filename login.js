document.addEventListener("DOMContentLoaded", function() {
    // Cuando se carga la página, añadir manejadores de eventos a los enlaces
    const windowsDownload = document.getElementById("windowsDownload");
    const linuxDownload = document.getElementById("linuxDownload");

    windowsDownload.addEventListener("click", function(e) {
        e.preventDefault(); // Evitar que el enlace redirija a otra página
        mostrarAgradecimiento('Windows');
    });

    linuxDownload.addEventListener("click", function(e) {
        e.preventDefault(); // Evitar que el enlace redirija a otra página
        mostrarAgradecimiento('Linux');
    });
});

// Función para saludar y mostrar mensaje de agradecimiento
function mostrarAgradecimiento(sistema) {
    var mensaje = saludarPersona("usuario", "Gracias por descargar la versión para " + sistema);
    alert(mensaje);
}

function saludarPersona(nombre, mensaje) {
    return "Hola, " + nombre + ". " + mensaje;
}
