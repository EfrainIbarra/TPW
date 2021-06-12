<?php
if (isset($_POST['accion']))
    $accion = $_POST['accion'];
else if (isset($_GET['accion']))
    $accion = $_GET['accion'];

//Coneccion a la base de datos
include 'conexion.php';

switch ($accion) {
    case 'Read':
        accionLeer($conexion);
        break;
    case 'Read2':
        accionLeer2($conexion);
        break;
    case 'Read3':
        accionLeer3($conexion);
        break;
    case 'Read4':
        accionLeer4($conexion);
        break;
    default:
        # code...
        break;
}

function accionLeer($conexion){
    $respuesta = array();
    $id = $_POST['id'];
    $Query = " SELECT SUM(creditos_acumulados) FROM electiva WHERE alumno_id = " . $id;
    $resultado = mysqli_query($conexion, $Query);

    $result = $resultado->fetch_array();
    $quantity = intval($result[0]);

    if ($result >= 1) {
        $respuesta['estado']  = 1;
        $respuesta['mensaje'] = "hola";
        $respuesta['valor'] = $quantity;
    } else {
        $respuesta['estado']  = 0;
        $respuesta['mensaje'] = mysqli_error($conexion);
    }
    echo json_encode($respuesta);
    mysqli_close($conexion);
}

function accionLeer2($conexion){
    $respuesta = array();

    $Query = " SELECT * FROM denominacion WHERE eje_tematico = 'Inquietudes vocacionales propias' ";
    $resultado = mysqli_query($conexion, $Query);

    $numero = mysqli_num_rows($resultado);

    //registros regresados
    if ($numero >= 1) {
        $respuesta["estado"]         = 1;
        $respuesta["mensaje"]        = "Registros encontrados";
        $respuesta["denominaciones"] = array();

        while ($row = mysqli_fetch_array($resultado)) {
            $rowDenominacion = array();
            $rowDenominacion["modalidad"]    = $row["modalidad"];
            $rowDenominacion["descripcion"]  = $row["descripcion"];
            $rowDenominacion["ejemplos"]     = $row["ejemplos"];

            array_push($respuesta["denominaciones"], $rowDenominacion);
        }
    } else {
        $respuesta["estado"]         = 0;
        $respuesta["mensaje"]        = "Registros no encontrados";
    }

    echo json_encode($respuesta);
    mysqli_close($conexion);
}

function accionLeer3($conexion){
    $respuesta = array();

    $Query = " SELECT * FROM denominacion WHERE eje_tematico = 'Enfasis en la profesión' ";
    $resultado = mysqli_query($conexion, $Query);

    $numero = mysqli_num_rows($resultado);

    //registros regresados
    if ($numero >= 1) {
        $respuesta["estado"]         = 1;
        $respuesta["mensaje"]        = "Registros encontrados";
        $respuesta["denominaciones"] = array();

        while ($row = mysqli_fetch_array($resultado)) {
            $rowDenominacion = array();
            $rowDenominacion["modalidad"]    = $row["modalidad"];
            $rowDenominacion["descripcion"]  = $row["descripcion"];
            $rowDenominacion["ejemplos"]     = $row["ejemplos"];

            array_push($respuesta["denominaciones"], $rowDenominacion);
        }
    } else {
        $respuesta["estado"]         = 0;
        $respuesta["mensaje"]        = "Registros no encontrados";
    }

    echo json_encode($respuesta);
    mysqli_close($conexion);
}

function accionLeer4($conexion){
    $respuesta = array();

    $Query = " SELECT * FROM denominacion WHERE eje_tematico = 'Complementarias a la formación' ";
    $resultado = mysqli_query($conexion, $Query);

    $numero = mysqli_num_rows($resultado);

    //registros regresados
    if ($numero >= 1) {
        $respuesta["estado"]         = 1;
        $respuesta["mensaje"]        = "Registros encontrados";
        $respuesta["denominaciones"] = array();

        while ($row = mysqli_fetch_array($resultado)) {
            $rowDenominacion = array();
            $rowDenominacion["modalidad"]    = $row["modalidad"];
            $rowDenominacion["descripcion"]  = $row["descripcion"];
            $rowDenominacion["ejemplos"]     = $row["ejemplos"];

            array_push($respuesta["denominaciones"], $rowDenominacion);
        }
    } else {
        $respuesta["estado"]         = 0;
        $respuesta["mensaje"]        = "Registros no encontrados";
    }

    echo json_encode($respuesta);
    mysqli_close($conexion);
}
