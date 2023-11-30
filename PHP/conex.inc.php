<?php
$host = "localhost";
$user = "root";
$passwd = "";
$db = "distord";

$conexion = mysqli_connect($host, $user, $passwd, $db);
if(mysqli_connect_errno()){
    echo "Error";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Insertar los datos en la tabla
    $sql = "INSERT INTO tu_tabla_de_clientes(nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

    if ($conexion->query($sql) === TRUE) {
        header("Location: ../contacto.html");
        exit;
    } else {
        // Manejar errores aquí si es necesario
    }

    $conexion->close(); // Cierra la conexión correctamente
}
?>
