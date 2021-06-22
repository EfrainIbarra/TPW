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
    default:
        # code...
        break;
}

function accionLeer($conexion){
    $respuesta = array();
    $id = $_POST['id'];
    $Query = " SELECT c.actividad, d.eje_tematico, d.modalidad, c.horas, (ce.creditos*d.factor) as horasUsadas,d.factor, ce.creditos  FROM constancia c, denominacion d, constancia_electiva ce WHERE ce.constancia_id = c.id AND c.valida = 1 AND c.denominacion_id = d.id AND c.alumno_id = ".$id;
    $resultado = mysqli_query($conexion, $Query);
    $numero = mysqli_num_rows($resultado);

    //registros regresados
    if ($numero >= 1) {
        $respuesta["estado"]         = 1;
        $respuesta["mensaje"]        = "Registros encontrados";
        $respuesta["desglose"] = array();

        while ($row = mysqli_fetch_array($resultado)) {
            $rowDesglose = array();
            $rowDesglose["actividad"]    = $row["actividad"];
            $rowDesglose["eje_tematico"] = $row["eje_tematico"];
            $rowDesglose["modalidad"]    = $row["modalidad"];
            $rowDesglose["horas"]        = $row["horas"];
            $rowDesglose["horasUsadas"]  = $row["horasUsadas"];
            $rowDesglose["factor"]       = $row["factor"];
            $rowDesglose["creditos"]     = $row["creditos"];
           
            array_push($respuesta["desglose"], $rowDesglose);
        }
    } else {
        $respuesta["estado"]         = 0;
        $respuesta["mensaje"]        = "Registros no encontrados";
    }

    echo json_encode($respuesta);
    mysqli_close($conexion);
}

?>