<?php
    //Modelo
    if(isset($_POST['accion']))
        $accion = $_POST['accion'];
    else if(isset($_GET['accion']))
        $accion = $_GET['accion'];

    //Coneccion a la base de datos
    include 'conexion.php';

    switch ($accion) {
        case 'Create':
            accionCrear($conexion);
            break;
        
        case 'Delete':
            accionEliminar($conexion);
            break;

        case 'Read':
            accionLeer($conexion);
            break;

        case 'Update':
            accionActualizar($conexion);
            break;
        default:
            # code...
            break;
    }

    function accionCrear($conexion){
        $respuesta = array();
        $eje_tematico = $_POST['eje_tematico'];
        $modalidad    = $_POST['modalidad'];
        $descripcion  = $_POST['descripcion'];
        $factor       = $_POST['factor'];
        $ejemplos     = $_POST['ejemplos'];

        //Incertar datos
        $Query = "INSERT INTO denominacion (id, eje_tematico, modalidad, descripcion, factor, ejemplos) VALUES (NULL, '".$eje_tematico."', '".$modalidad."', '".$descripcion."', '.$factor.', '".$ejemplos."');";
        
        //Se crea el registro en la base de datos
        $resultado = mysqli_query($conexion,$Query);

        if($resultado >=1){
            $respuesta['estado']  = 1;
            $respuesta['mensaje'] = "El registro se creo con exito";
            $respuesta['id']      = mysqli_insert_id($conexion);
            echo json_encode($respuesta);
        }else{
            $respuesta['estado']  = 0;
            $respuesta['mensaje'] = "A ocurrido un error al crear el registro";
            $respuesta['id']      = -1;
            echo json_encode($respuesta);
        }
        mysqli_close($conexion);
    }
    
    function accionEliminar($conexion){
        $respuesta = array();
        $id = $_POST['id'];
        $Query = "DELETE FROM denominacion WHERE denominacion.id = ".$id;
        mysqli_query($conexion,$Query);

        $registrosEliminados = mysqli_affected_rows($conexion);
        if($registrosEliminados >=1){
            $respuesta['estado']  = 1;
            $respuesta['mensaje'] = "El registro se elimino con exito";
        }else{
            $respuesta['estado']  = 0;
            $respuesta['mensaje'] = mysqli_error($conexion);
        }
        echo json_encode($respuesta);
        mysqli_close($conexion);
    }

    function accionLeer($conexion){
        $respuesta = array();
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $Query = "SELECT * FROM denominacion WHERE id = ".$id;
            $resultado = mysqli_query($conexion,$Query);
            $numero = mysqli_num_rows($resultado);

            if($numero >= 1){
                $row = mysqli_fetch_array($resultado);

                $respuesta["id"]           = $row["id"];
                $respuesta["eje_tematico"] = $row["eje_tematico"];
                $respuesta["modalidad"]    = $row["modalidad"];
                $respuesta["descripcion"]  = $row["descripcion"];
                $respuesta["factor"]       = $row["factor"];
                $respuesta["ejemplos"]     = $row["ejemplos"];

                $respuesta["estado"] = 1;
                $respuesta["mensaje"] = "Existe registro";
            }else{
                $respuesta["estado"] = 0;
                $respuesta["mensaje"] = "Ocurrio un error inesperado";
            }
        }else{
            $Query = "SELECT * FROM denominacion";
            $resultado = mysqli_query($conexion,$Query);
            
            $numero = mysqli_num_rows($resultado);

            //registros regresados
            if($numero >= 1){
                $respuesta["estado"]         = 1;
                $respuesta["mensaje"]        = "Registros encontrados";
                $respuesta["denominaciones"] = array();

                while($row = mysqli_fetch_array($resultado)){
                    $rowDenominacion = array();
                    $rowDenominacion["id"]           = $row["id"];
                    $rowDenominacion["eje_tematico"] = $row["eje_tematico"];
                    $rowDenominacion["modalidad"]    = $row["modalidad"];
                    $rowDenominacion["descripcion"]  = $row["descripcion"];
                    $rowDenominacion["factor"]       = $row["factor"];
                    $rowDenominacion["ejemplos"]     = $row["ejemplos"];
                
                    array_push($respuesta["denominaciones"],$rowDenominacion);
                }
            }else{
                $respuesta["estado"]         = 0;
                $respuesta["mensaje"]        = "Registros no encontrados";
            }
        }
        echo json_encode($respuesta);
        mysqli_close($conexion);
    }

    function accionActualizar($conexion){
        $respuesta = array();

        $id           = $_POST['id'];
        $eje_tematico = $_POST['eje_tematico'];
        $modalidad    = $_POST['modalidad'];
        $descripcion  = $_POST['descripcion'];
        $factor       = $_POST['factor'];
        $ejemplos     = $_POST['ejemplos'];

        $Query = " UPDATE denominacion ";
        $Query = $Query." SET eje_tematico = '".$eje_tematico."', modalidad ='".$modalidad."', descripcion = '".$descripcion."', factor = ".$factor.", ejemplos = '".$ejemplos."' ";
        $Query = $Query." WHERE id = ".$id;

        $resultado = mysqli_query($conexion,$Query);
        $numero = mysqli_affected_rows($conexion);

        if($numero >= 1){
            $respuesta["estado"] = 1;
            $respuesta["mensaje"] = "El registro se actualizo correctamente";
        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "A ocurrido un error al actualizar el registro";
        }
        echo json_encode($respuesta);
        mysqli_close($conexion);
    }
?>