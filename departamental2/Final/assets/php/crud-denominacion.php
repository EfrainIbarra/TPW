<?php
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

    function accionCrear($conexion) {
        if (!isset($_GET['actividad']) || !isset($_GET['fecha_inicio']) || !isset($_GET['fecha_fin']) || !isset($_GET['horas']) || !isset($_GET['archivo']) || !isset($_GET['observaciones'])) {
      
              $arr = array('error' => 1);
      
              echo json_encode($arr);
              return;
        }
      
        $activity = $_GET['actividad'];
        $start_date = $_GET['fecha_inicio'];
        $end_date = $_GET['fecha_fin'];
        $hours = $_GET['horas'];
        $archive = $_GET['archivo'];
        $observations = $_GET['observaciones'];
      
        $query1 = "INSERT INTO constancia (actividad, fecha_inicio, fecha_fin, horas, archivo, observaciones) VALUE ('$activity', '$start_date', '$end_date', $hours, '$archive', '$observations');";
      
        if ($conexion->query($query1) === TRUE) {
          $arr = array('error' => 0);
      
          echo json_encode($arr);
        } else {
          $arr = array('error' => 2);
      
          echo json_encode($arr);
        }
    }
    
    function accionLeer($conexion){
        $respuesta = array();
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $Query = "SELECT * FROM constancia WHERE id = ".$id;
            $resultado = mysqli_query($conexion,$Query);
            $numero = mysqli_num_rows($resultado);

            if($numero >= 1){
                $row = mysqli_fetch_array($resultado);

                $respuesta["id"]            = $row["id"];
                $respuesta["actividad"]     = $row["actividad"];
                $respuesta["fecha_inicio"]  = $row["fecha_inicio"];
                $respuesta["fecha_fin"]     = $row["fecha_fin"];
                $respuesta["horas"]         = $row["horas"];
                $respuesta["archivo"]       = $row["archivo"];
                $respuesta["observaciones"] = $row["observaciones"];

                $respuesta["estado"] = 1;
                $respuesta["mensaje"] = "Existe registro";
            }else{
                $respuesta["estado"] = 0;
                $respuesta["mensaje"] = "Ocurrio un error inesperado";
            }
        }else{
            $Query = "SELECT * FROM constancia";
            $resultado = mysqli_query($conexion,$Query);
            
            $numero = mysqli_num_rows($resultado);

            //registros regresados
            if($numero >= 1){
                $respuesta["estado"]         = 1;
                $respuesta["mensaje"]        = "Registros encontrados";
                $respuesta["denominaciones"] = array();

                while($row = mysqli_fetch_array($resultado)){
                    $rowDenominacion = array();
                    $rowDenominacion["id"]            = $row["id"];
                    $rowDenominacion["actividad"]     = $row["actividad"];
                    $rowDenominacion["fecha_inicio"]  = $row["fecha_inicio"];
                    $rowDenominacion["fecha_fin"]     = $row["fecha_fin"];
                    $rowDenominacion["horas"]         = $row["horas"];
                    $rowDenominacion["archivo"]       = $row["archivo"];
                    $rowDenominacion["observaciones"] = $row["observaciones"];
                
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

    function accionEliminar($conexion){
        $respuesta = array();
        $id = $_POST['id'];
        $Query = "DELETE FROM constancia WHERE constancia.id = ".$id;
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
    
    function accionActualizar($conexion){
        $respuesta = array();

        $id            = $_POST['id'];
        $actividad     = $_POST['actividad'];
        $horas         = $_POST['horas'];
        $archivo       = $_POST['archivo'];
        $observaciones = $_POST['observaciones'];

        $Query = " UPDATE constancia ";
        $Query = $Query." SET actividad = '".$actividad."', horas = ".$horas.", archivo = '".$archivo."', observaciones = '".$observaciones."' ";
        $Query = $Query." WHERE id = ".$id;

        $resultado = mysqli_query($conexion,$Query);
        $numero = mysqli_affected_rows($conexion);

        if($numero >= 1){
            $respuesta["estado"] = 1;
            $respuesta["mensaje"] = "El registro se actualizo correctamente";
        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = mysqli_error($conexion);
        }
        echo json_encode($respuesta);
        mysqli_close($conexion);
    }
?>
