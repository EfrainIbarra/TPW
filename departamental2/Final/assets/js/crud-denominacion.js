var ideAEliminar = 0;
var idAActualizar = 0;

function actionCreate() {
    var tabla = $('#example1').DataTable();
    let activity = document.getElementById("actividad").value;
    let start_date = document.getElementById("fecha_inicio").value;
    let end_date = document.getElementById("fecha_fin").value;
    let hours = document.getElementById("horas").value;
    let archive = document.getElementById("archivo").value;
    let observations = document.getElementById("observaciones").value;

    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'GET',
        data: {
            actividad: activity,
            fecha_inicio: start_date,
            fecha_fin: end_date,
            horas: hours,
            archivo: archive,
            observaciones: observations,
            accion: 'Create'
        },
        success: function (resultado) {
            var objectJson = JSON.parse(resultado);

            if (objectJson.error == 2) {
                alert("Error en la query");
                $('#modal-nueva').modal('hide');
            } else
                if (objectJson.error == 1) {
                    // Notificar de error
                    alert("Faltan datos");
                    $('#modal-nueva').modal('hide');
                } else {
                    var Botones = '<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-Actualizar" onclick="regActualizar(' + objectJson.id + ')" href="#"> <i class="fa fa-pencil"> </i> Editar </a>'
                    Botones = Botones + '<a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="ideEliminar(' + objectJson.id + ')" href="#"> <i class="fa fa-trash"> </i> Eliminar </a>'

                    tabla.row.add([
                        activity,
                        start_date,
                        hours,
                        Botones
                    ]).node().id = 'row_' + objectJson.id;
                    tabla.draw(false);

                    alert("Almacenado exitosamente");
                    $('#modal-nueva').modal('hide');
                }

        }
    });
}

function actionRead() {
    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'GET',
        data: {
            accion: 'Read'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);

            if (objetoJSON.estado == 1) {
                //Mostrar tabla
                var tabla = $('#example1').DataTable();
                for (denominacion of objetoJSON.denominaciones) {
                    var Botones = '<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-Actualizar" onclick="regActualizar(' + denominacion.id + ')" href="#"> <i class="fa fa-pencil"> </i> Editar </a>'
                    Botones = Botones + '<a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="ideEliminar(' + denominacion.id + ')" href="#"> <i class="fa fa-trash"> </i> Eliminar </a>'

                    tabla.row.add([
                        denominacion.actividad,
                        denominacion.fecha_inicio,
                        denominacion.horas,
                        Botones
                    ]).node().id = 'row_' + denominacion.id; //asignamos un id a cada renglon
                    tabla.draw(false);
                }
            }
        }
    });
}

function actionUpdate() {
    var actividad = document.getElementById("actividad_edit").value;
    var fecha_inicio = document.getElementById("fecha_inicio_edit").value;
    var fecha_fin = document.getElementById("fecha_fin_edit").value;
    var horas = document.getElementById("horas_edit").value;
    var archivo = document.getElementById("archivo_edit").value;
    var observaciones = document.getElementById("observaciones_edit").value;

    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'POST',
        data:{
            id: idAActualizar,
            actividad: actividad,
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            horas: horas,
            archivo: archivo,
            observaciones: observaciones,
            accion: 'Update'
        },
        success: function(resultado){
            var objetoJSON = JSON.parse(resultado);
            if(objetoJSON.estado == 1){
                ///////////////////////////////////////////
                var tabla = $('#example1').DataTable();
                tabla.row( "#row_"+idAActualizar ).invalidate().draw();
                //////////////////////////////////////////
                alert(objetoJSON.mensaje);
                $('#modal-Actualizar').modal('hide');
            }else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}

function regActualizar(id){
    idAActualizar = id;
    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'GET',
        data:{
            id: idAActualizar,
            accion: 'Read'
        },
        success: function(resultado){
            var objetoJSON = JSON.parse(resultado);
            if(objetoJSON.estado == 1){
                document.getElementById("actividad_edit").value     = objetoJSON.actividad;
                document.getElementById("fecha_inicio_edit").value  = objetoJSON.fecha_inicio;
                document.getElementById("fecha_fin_edit").value     = objetoJSON.fecha_fin;
                document.getElementById("horas_edit").value         = objetoJSON.horas;
                document.getElementById("archivo_edit").value       = objetoJSON.archivo;
                document.getElementById("observaciones_edit").value = objetoJSON.observaciones;
            }else{
                alert(objetoJSON.mensaje);
            }
        }
    });
    
}

function actionDelete() {
    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'POST',
        data: {
            id: ideAEliminar,
            accion: 'Delete'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);
            if (objetoJSON.estado == 1) {
                var tabla = $('#example1').DataTable();
                tabla.row("#row_" + ideAEliminar).remove().draw();

                alert(objetoJSON.mensaje);
                $('#modal-default').modal('hide');
            } else {
                alert(objetoJSON.mensaje);
            }
        }
    });
}

function ideEliminar(id) {
    ideAEliminar = id;
}
