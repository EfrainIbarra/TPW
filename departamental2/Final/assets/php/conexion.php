<?php
    $servidor = "sql309.mipropia.com";
    $usuario = "mipc_28423953";
    $clave = "C4nc3r";
    $base = "mipc_28423953_electivas";

    $conexion = mysqli_connect($servidor,$usuario,$clave,$base);
    mysqli_set_charset($conexion,"utf8");
?>
