var ideAEliminar = 0;

function actionRead() {
    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'GET',
        data: {
            accion      : 'Read'
        },
        success: function( resultado ){
            var objetoJSON = JSON.parse(resultado);

            if(objetoJSON.estado==1){
                //Mostrar tabla
                var tabla = $('#example1').DataTable();
                for(denominacion of objetoJSON.denominaciones){
                    var Botones = '<a class="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-Actualizar" href="#"> <i class="fa fa-pencil"> </i> Editar </a>'
                        Botones = Botones + '<a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" onclick="ideEliminar('+denominacion.id+');" href="#"> <i class="fa fa-trash"> </i> Eliminar </a>'
                    
                    tabla.row.add([
                        denominacion.actividad,
                        denominacion.fecha_inicio,
                        denominacion.horas,
                        Botones
                    ]).node().id = 'row_'+denominacion.id; //asignamos un id a cada renglon
                    tabla.draw(false);
                }
            }
        }
    });
}

function actionDelete() {
    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'POST',
        data:{
            id: ideAEliminar,
            accion: 'Delete'
        },
        success: function(resultado){
            var objetoJSON = JSON.parse(resultado);
            if(objetoJSON.estado == 1){
                var tabla = $('#example1').DataTable();
                tabla.row( "#row_"+ideAEliminar ).remove().draw();

                alert(objetoJSON.mensaje);
                $('#modal-default').modal('hide');
            }else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}

function ideEliminar(id){
    ideAEliminar = id;
}