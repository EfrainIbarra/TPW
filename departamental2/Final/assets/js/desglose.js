
function actionRead(){
    $.ajax({
        url: "assets/php/desglose.php",
        method: 'POST',
        data: {
            id: 1,
            accion: 'Read'
        },
        success: function (resultado) {
            var objetoJSON = JSON.parse(resultado);

            if (objetoJSON.estado == 1) {
                //Mostrar tabla
                var tabla = $('#example1');
                var nC = 0;
                for (desglose of objetoJSON.desglose) {
                    nC = (nC+parseFloat(desglose.creditos));
                    tabla.append("<tr><td>"+ desglose.actividad +"</td><td>"+desglose.eje_tematico+"</td><td>"+desglose.modalidad+"</td><td>"+desglose.horas+"</td><td>"+desglose.horasUsadas+"</td><td>"+desglose.factor+"</td><td>"+desglose.creditos+"</td></tr>");
                    
                }
                document.getElementById("total_creditos").innerHTML = nC;
            }
        }
    });
}