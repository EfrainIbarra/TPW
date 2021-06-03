<?php
    $servidor = "sql303.byethost14.com";
    $usuario = "b14_28240707";
    $clave = "C4nc3r800";
    $base = "b14_28240707_electivas";

    $conexion = mysqli_connect($servidor,$usuario,$clave,$base);
    mysqli_set_charset($conexion,"utf8");
?>
