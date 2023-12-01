// Importa los módulos http, fs (sistema de archivos) y path de Node.js.
const http = require('http');
const fs = require('fs');
const path = require('path');

// Crea un servidor HTTP con una función de callback para manejar las solicitudes.
const server = http.createServer((req, res) => {
    // Construye la ruta del archivo solicitado concatenando el directorio actual con la URL de la solicitud.
    let filePath = '.' + req.url;

    // Si la URL es '/', redirige a 'index.html'.
    if (filePath === './') {
        filePath = './index.html';
    }

    // Obtiene la extensión del archivo solicitado y la convierte a minúsculas.
    const extname = String(path.extname(filePath)).toLowerCase();

    // Define el tipo de contenido (MIME type) basándose en la extensión del archivo.
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.svg': 'image/svg+xml',
    }[extname] || 'application/octet-stream';

    // Lee el contenido del archivo asociado a filePath.
    fs.readFile(filePath, (error, content) => {
        // Maneja los errores.
        if (error) {
            if (error.code === 'ENOENT') {
                // Si el archivo no se encuentra, responde con un error 404.
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            } else {
                // Si hay un error interno del servidor, responde con un error 500.
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('500 Internal Server Error');
            }
        } else {
            // Si se lee correctamente, responde con el contenido y el tipo de contenido adecuado.
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Especifica el puerto del servidor, utilizando el proporcionado por el entorno o el puerto 3000 por defecto.
const port = process.env.PORT || 3000;

// Inicia el servidor y muestra un mensaje en la consola indicando en qué dirección y puerto está escuchando.
server.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}/`);
});
