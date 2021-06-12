function actionRead() {
    $.ajax({
        url: "assets/php/liveracion.php",
        method: 'POST',
        data: {
            id: 1,
            accion: 'Read'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);
            
            if (objetoJSON.estado == 1) {
                var operacion = (objetoJSON.valor * 5);
                var $pb = $('.progress .bar');
                $pb.attr('data-transitiongoal', operacion).progressbar({ display_text: 'center' });
            }else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}

function actionRead2(){
    $.ajax({
        url: "assets/php/liveracion.php",
        method: 'GET',
        data: {
            id: 1,
            accion: 'Read2'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);

            if (objetoJSON.estado == 1) {
                //Mostrar tabla
                var tabla = $('#example1');
                for (denominacion of objetoJSON.denominaciones) {
                    tabla.append("<tr><td>"+ denominacion.modalidad +"</td><td>"+denominacion.ejemplos+"</td><td>"+denominacion.descripcion+"</td></tr>");
                }
            }
        }
    });
}

function actionRead3(){
    $.ajax({
        url: "assets/php/liveracion.php",
        method: 'GET',
        data: {
            id: 1,
            accion: 'Read3'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);

            if (objetoJSON.estado == 1) {
                //Mostrar tabla
                var tabla = $('#example2');
                for (denominacion of objetoJSON.denominaciones) {
                    tabla.append("<tr><td>"+ denominacion.modalidad +"</td><td>"+denominacion.ejemplos+"</td><td>"+denominacion.descripcion+"</td></tr>");
                }
            }
        }
    });
}

function actionRead4(){
    $.ajax({
        url: "assets/php/liveracion.php",
        method: 'GET',
        data: {
            id: 1,
            accion: 'Read4'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);

            if (objetoJSON.estado == 1) {
                //Mostrar tabla
                var tabla = $('#example3');
                for (denominacion of objetoJSON.denominaciones) {
                    tabla.append("<tr><td>"+ denominacion.modalidad +"</td><td>"+denominacion.ejemplos+"</td><td>"+denominacion.descripcion+"</td></tr>");
                }
            }
        }
    });
}