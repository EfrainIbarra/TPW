function suma(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = n1+n2;
}

function resta(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = n1-n2;
}

function multi(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = n1*n2;
}

function div(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = n1/n2;
}

function borrar(){
    document.getElementById('calculadora').reset();
    document.getElementById('resultado').innerHTML = "";
}