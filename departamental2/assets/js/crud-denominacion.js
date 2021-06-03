var ideAEliminar = 0;
var idAActualizar = 0;

function actionCreate() {
    var tabla = $('#example1').DataTable();
    var eje_tem = document.getElementById('eje_tematico_create').value;
    var modal = document.getElementById('modalidad_create').value;
    var descrip = document.getElementById('descr_credit_create').value;
    var fact = document.getElementById('factor_create').value;
    var eje_act = document.getElementById('eje_act_create').value; 

    //Modelo = comunicar con el servidor
    //Guardar la informacion en la case de datos

    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'POST',
        data: {
            eje_tematico: eje_tem,
            modalidad   : modal,
            descripcion : descrip,
            factor      : fact,
            ejemplos    : eje_act,
            accion      : 'Create'
        },
        success: function( resultado ){
            var objetoJSON = JSON.parse(resultado);

            if(objetoJSON.estado==1){
                //Vista
                var Botones = '<a class="btn btn-primary btn-sm" onclick="regActualizar('+objetoJSON.id+');"  href="#" data-toggle="modal" data-target="#modal-actualizar"> <i class="fa fa-pencil"></i> Editar </a> ';
                    Botones = Botones + '<a class="btn btn-danger btn-sm" onclick="ideEliminar('+objetoJSON.id+');" href="#" data-toggle="modal" data-target="#modal-delete"> <i class="fa fa-trash"></i> Borrar </a>';

                tabla.row.add([
                    eje_tem,
                    modal,
                    descrip,
                    Botones
                ]).node().id = 'row_'+objetoJSON.id;
                tabla.draw(false);

                alert(objetoJSON.mensaje);
                $('#modal-nueva').modal('hide');
            }else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}

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
                    var Botones = '<a class="btn btn-primary btn-sm" onclick="regActualizar('+denominacion.id+');" href="#" data-toggle="modal" data-target="#modal-actualizar"> <i class="fa fa-pencil"></i> Editar </a> ';
                        Botones = Botones + '<a class="btn btn-danger btn-sm" onclick="ideEliminar('+denominacion.id+');" href="#" data-toggle="modal" data-target="#modal-delete"> <i class="fa fa-trash"></i> Borrar </a>';

                    tabla.row.add([
                        denominacion.eje_tematico,
                        denominacion.modalidad,
                        denominacion.descripcion,
                        Botones
                    ]).node().id = 'row_'+denominacion.id; //asignamos un id a cada renglon
                    tabla.draw(false);
                }
            }
        }
    });
}

function actionUpdate() {
    var eje_tematico_edit = document.getElementById("eje_tematico_edit").value;
    var modalidad_edit = document.getElementById("modalidad_edit").value;
    var descr_credit_edit = document.getElementById("descr_credit_edit").value;
    var factor_edit = document.getElementById("factor_edit").value;
    var eje_act_edit = document.getElementById("eje_act_edit").value;

    $.ajax({
        url: "assets/php/crud-denominacion.php",
        method: 'POST',
        data:{
            id: idAActualizar,
            eje_tematico: eje_tematico_edit,
            modalidad: modalidad_edit,
            descripcion: descr_credit_edit,
            factor: factor_edit,
            ejemplos: eje_act_edit,
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
                $('#modal-actualizar').modal('hide');
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
                document.getElementById("eje_tematico_edit").value = objetoJSON.eje_tematico;
                document.getElementById("modalidad_edit").value = objetoJSON.modalidad;
                document.getElementById("descr_credit_edit").value = objetoJSON.descripcion;
                document.getElementById("factor_edit").value = objetoJSON.factor;
                document.getElementById("eje_act_edit").value = objetoJSON.ejemplos;
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
                $('#modal-delete').modal('hide');
            }else{
                alert(objetoJSON.mensaje);
            }
        }
    });
}

function ideEliminar(id){
    ideAEliminar=id;
}