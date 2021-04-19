function pulsada (tecla) {
    var listaNodosPantalla = document.getElementsByClassName('pantalla');
    var nodoTextoPantalla = listaNodosPantalla[0].firstChild;
    if(tecla=='AC'){
        nodoTextoPantalla.nodeValue = ' ';
    }else if(tecla=='='){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        nodoTextoPantalla.nodeValue = resultado;
    }else if(tecla=='!'){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        var dato = resultado;
        for(var i = dato-1; i >= 1; i--){
            resultado = resultado * i;
        }
        nodoTextoPantalla.nodeValue = resultado;
    }else if(tecla=='√'){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        resultado = Math.sqrt(resultado);
        nodoTextoPantalla.nodeValue = resultado;
    }else if(tecla=='^'){
        var exponente = prompt('Indique el numero exponente:')
        nodoTextoPantalla.nodeValue =Math.pow(nodoTextoPantalla.nodeValue, exponente);
    }else if(tecla=='%'){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        resultado = resultado/100;
        nodoTextoPantalla.nodeValue = resultado;  
    }else if(tecla=='log'){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        resultado = Math.log10(resultado);
        nodoTextoPantalla.nodeValue = resultado;  	
    }else if(tecla=='ln'){
        var resultado = eval(nodoTextoPantalla.nodeValue);
        resultado = Math.log(resultado);
        nodoTextoPantalla.nodeValue = resultado;
    }else{
        nodoTextoPantalla.nodeValue = nodoTextoPantalla.nodeValue + tecla;
    } 
}

