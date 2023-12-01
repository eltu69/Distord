// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Cuando se carga la página, añadir manejadores de eventos a los enlaces
    const windowsDownload = document.getElementById("windowsDownload");
    const linuxDownload = document.getElementById("linuxDownload");

    // Manejador de eventos para el enlace de descarga de Windows
    windowsDownload.addEventListener("click", function(e) {
        e.preventDefault(); // Evitar que el enlace redirija a otra página
        mostrarAgradecimiento('Windows');
    });

    // Manejador de eventos para el enlace de descarga de Linux
    linuxDownload.addEventListener("click", function(e) {
        e.preventDefault(); // Evitar que el enlace redirija a otra página
        mostrarAgradecimiento('Linux');
    });
});

// Función para mostrar un mensaje de agradecimiento
function mostrarAgradecimiento(sistema) {
    // Obtener el mensaje de agradecimiento llamando a la función saludarPersona
    var mensaje = saludarPersona("usuario", "Gracias por descargar la versión para " + sistema);
    alert(mensaje);
}

// Función para saludar a una persona con un mensaje
function saludarPersona(nombre, mensaje) {
    // Concatenar el nombre y el mensaje y devolver el resultado
    return "Hola, " + nombre + ". " + mensaje;
}
