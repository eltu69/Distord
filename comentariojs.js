 // Aca llamamos la api de randomuser para sacar datos
 const apiUrl = "https://randomuser.me/api/";
    
 // Aca creamos una lista con comentarios aleatorios que dicen nuestros "Compradores" sobre nuestros productos
 const comentariosAleatorios = [
    "Distord es asombroso. ¡Lo recomiendo sin duda!",
    "Estoy impresionado con la calidad de Distord. Es excepcional.",
    "Descargué Distord y estoy muy satisfecho. ¡Es una aplicación de alta calidad!",
    "Distord es simplemente genial. Ofrece una experiencia de chat inigualable.",
    "No puedo creer lo increíble que es Distord. ¡Superó mis expectativas!",
    "Distord ha transformado la forma en que me comunico. ¡Estoy encantado con el cambio!",
    "Distord brinda un servicio excepcional y entrega rápida. ¡El producto es de alta calidad! ¡Totalmente recomendado!",
    "Empecé a usar Distord y estoy emocionado. Es como tener un nuevo lugar para conectarse en línea. ¡Una experiencia única!",
    "Estoy fascinado por el mundo de Distord. Estoy ansioso por ver cómo evoluciona la aplicación en el futuro.",
    "Unirme a servidores en Distord me permite conectarme con comunidades de todo el mundo. ¡Es genial saber que estoy respaldando la diversidad!",
    "Me uní a un servidor en Distord y estoy listo para sumergirme en el mundo de las conversaciones en grupo. ¡Espero conocer a otros entusiastas!",
    "La seguridad y autenticidad de Distord son impresionantes. ¡Estoy encantado con mi experiencia en la aplicación!",
    "Nunca imaginé que tendría una comunidad en línea tan activa. Distord hace que sea fácil y emocionante.",
    "Las características de Distord son una forma innovadora de comunicarse en línea. Estoy emocionado por las oportunidades que ofrece.",
    "Usar Distord es como entrar en un mundo nuevo y emocionante. ¡No puedo esperar a ver qué más puedo hacer en la aplicación!",
    "La comunidad de usuarios de Distord es increíble. Compartir experiencias y descubrir nuevos servidores es parte de la diversión.",
    "Cada servidor en Distord tiene su propia historia y comunidad. Cada experiencia es una inversión en comunicación y amistades."
];


 // Aqui creamos las funciones donde los "Compradores dejan un comentario con su nombre y foto de perfil del comprador"
 function obtenerCompradorAleatorio() {
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             const comprador = data.results[0];
             const nombre = `${comprador.name.first} ${comprador.name.last}`;
             const imagen = comprador.picture.large;

             // Mostramos los nombres y las imagenes de los compradores
             const nombreComprador = document.getElementById("nombre-comprador");
             nombreComprador.textContent = `${nombre}`;

             const imagenProducto = document.getElementById("imagen-producto");
             imagenProducto.src = imagen;

             // En esta funcion hacemos que eligan un comentario Random.
             const comentarioAleatorio = comentariosAleatorios[Math.floor(Math.random() * comentariosAleatorios.length)];

             // y mostramos los comentarios.
             const comentarioDiv = document.getElementById("comentario");
             comentarioDiv.textContent = `"${comentarioAleatorio}"`;
         })
         .catch(error => console.error("Error al obtener datos: " + error));
 }

 // aca llamamos la funcion.
 window.onload = function() {
     obtenerCompradorAleatorio();
 }
 