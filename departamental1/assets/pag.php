<?php
    $name = $_POST['name'];
    $ontas = $_POST['ontas'];
    $anime = $_POST['anime'];
    $color = $_POST['color'];
    
    switch($anime){
        case 1:
            $texto = "no";
            break;
        case 2:
            $texto = "Shojo";
            break;
        case 3:
            $texto = "Shonen";
            break;
        case 4:
            $texto = "Gore";
            break;
        case 5:
            $texto = "Ficcion";
            break;
        default:
            $texto = "Nose";
            break;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles4.css"/>
    <title>Hola</title>
</head>
<body>
    <h1>Hola <?php echo $name;?></h1>
    <fieldset>
        <p>Ten mas cuidado con a quien le das tus datos personales ¿va? me cabas de decir que estas en "<?php echo $ontas; ?>". 
         Pero bueno, tu genero de anime preferido es el <?php echo $texto;?> y elegiste el color <?php echo $color;?>, te perdono, por ello no enviare a nadie a por ti.</p>
</fieldset>
</body>
</html>
