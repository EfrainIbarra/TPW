function long() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var formula = document.getElementById('formula');

    switch (a) {
        case "Km": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "M": {
                    var calculo = num1.value * 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1000";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 100000;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 100000";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 1e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1e+6";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 1e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1e+9";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1e+12;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1e+12";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 1.609;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud por 1.609";
                    break;
                }
                case "yard": {
                    var calculo = num1.value * 1093;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1093";
                    break;
                }
                case "ft": {
                    var calculo = num1.value * 3280;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 3280";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 39370;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 39370";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 1.852;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 1.852";
                    break;
                }
            }
            break;
        }
        case "M": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1000";
                    break;
                }
                case "M": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 100;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 100";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1000";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 1e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1e+6";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1e+9";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 1609;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud por 1609";
                    break;
                }
                case "yard": {
                    var calculo = num1.value * 1.093;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1.093";
                    break;
                }
                case "ft": {
                    var calculo = num1.value * 3.281;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 3.281";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 39.37;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 39.37";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 1852;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 1852";
                    break;
                }
            }
            break;
        }
        case "Cm": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 100000;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 100000";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 100;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 100";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 10;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 10";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 10000;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 10000";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1e+7;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1e+7";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 160934;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 160934";
                    break;
                }
                case "yard": {
                    var calculo = num1.value / 91.44;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 91.44";
                    break;
                }
                case "ft": {
                    var calculo = num1.value / 30.48;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 30.48";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value / 2.54;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 2.54";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 185200;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 185200";
                    break;
                }
            }
            break;
        }
        case "Mm": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 1e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1e+6";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1000";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value / 10;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 10";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1000";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1e+6";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 1.609e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1.609e+6";
                    break;
                }
                case "yard": {
                    var calculo = num1.value / 914;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 914";
                    break;
                }
                case "ft": {
                    var calculo = num1.value / 305;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 305";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value / 25.4;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 25.4";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 1.852e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 1.852e+6";
                    break;
                }
            }
            break;
        }
        case "Pm": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 1e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1e+9";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 1e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1e+6";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value / 10000;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 10000";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value / 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1000";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1000";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 1.609e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1.609e+9";
                    break;
                }
                case "yard": {
                    var calculo = num1.value / 914400;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 914400";
                    break;
                }
                case "ft": {
                    var calculo = num1.value / 304800;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 304800";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value / 25400;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 25400";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 1.852e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 1.852e+9";
                    break;
                }
            }
            break;
        }
        case "Nm": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 1e+12;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1e+12";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 1e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1e+9";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value / 1e+7;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1e+7";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value / 1e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1e+6";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value / 1000;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1000";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 1.609e+12;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1.609e+12";
                    break;
                }
                case "yard": {
                    var calculo = num1.value / 9.144e+8;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 9.144e+8";
                    break;
                }
                case "ft": {
                    var calculo = num1.value / 3.048e+8;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 3.048e+8";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value / 2.54e+7;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 2.54e+7";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 1.852e+12;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud por 1.852e+12";
                    break;
                }
            }
            break;
        }
        case "Mill": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value * 1.609;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1.609";
                    break;
                }
                case "M": {
                    var calculo = num1.value * 1609;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1609";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 160934;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 16934";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 1.609e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1.609e+6";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 1.609e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1.609e+9";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1.609e+12;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1.609e+12";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "yard": {
                    var calculo = num1.value * 1760;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1760";
                    break;
                }
                case "ft": {
                    var calculo = num1.value * 5280;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 5280";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 63360;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 63360";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 1.151;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1.151";
                    break;
                }
            }
            break;
        }
        case "yard": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 1094;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1094";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 1.094;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 1.094";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 91.44;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 91.44";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 914;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 914";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 914400;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 914400";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 9.144e+8;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 9.144e+8";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 1760;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 1760";
                    break;
                }
                case "yard": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "ft": {
                    var calculo = num1.value * 3;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 3";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 36;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 36";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 2025;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 2025";
                    break;
                }
            }
            break;
        }
        case "ft": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 3281;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 3281";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 3.281;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 3.281";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 30.48;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 30.48";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 305;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 305";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 304800;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 304800";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 3.048e+8;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 3.048e+8";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 5280;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 5280";
                    break;
                }
                case "yard": {
                    var calculo = num1.value / 3;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 3";
                    break;
                }
                case "ft": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 12;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 12";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 6076;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 6076";
                    break;
                }
            }
            break;
        }
        case "pulg": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value / 39370;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 39370";
                    break;
                }
                case "M": {
                    var calculo = num1.value / 39.37;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 39.37";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 2.54;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 2.54";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 25.4;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 25.4";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 25400;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 25400";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 2.54e+7;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 2.54e+7";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value / 63360;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 63360";
                    break;
                }
                case "yard": {
                    var calculo = num1.value / 36;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 36";
                    break;
                }
                case "ft": {
                    var calculo = num1.value / 12;
                    num2.value = calculo;
                    formula.innerHTML = "Divide el valor de longitud entre 12";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
                case "MN": {
                    var calculo = num1.value / 72913;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de longitud entre 72913";
                    break;
                }
            }
            break;
        }
        case "MN": {
            switch (b) {
                case "Km": {
                    var calculo = num1.value * 1.852;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1.852";
                    break;
                }
                case "M": {
                    var calculo = num1.value * 1852;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplpica el valor de longitud por 1852";
                    break;
                }
                case "Cm": {
                    var calculo = num1.value * 185200;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 185200";
                    break;
                }
                case "Mm": {
                    var calculo = num1.value * 1.852e+6;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1.852e+6";
                    break;
                }
                case "Pm": {
                    var calculo = num1.value * 1.852e+9;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1.852e+9";
                    break;
                }
                case "Nm": {
                    var calculo = num1.value * 1.852e+12;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1.852e+12";
                    break;
                }
                case "Mill": {
                    var calculo = num1.value * 1.151;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 1.151";
                    break;
                }
                case "yard": {
                    var calculo = num1.value * 2025;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 2025";
                    break;
                }
                case "ft": {
                    var calculo = num1.value * 6076;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 6076";
                    break;
                }
                case "pulg": {
                    var calculo = num1.value * 72913;
                    num2.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de longitud por 72913";
                    break;
                }
                case "MN": {
                    var calculo = num1.value * 1;
                    num2.value = calculo;
                    formula.innerHTML = "Multiplica el valor de longitud por 1";
                    break;
                }
            }
            break;
        }
    }
}

function temp() {
    var num3 = document.getElementById('num3');
    var num4 = document.getElementById('num4');
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var formula = document.getElementById('formula');

    switch (c) {
        case "Ce": {
            switch (d) {
                case "Ce": {
                    var calculo = num3.value * 1;
                    num4.value = calculo;
                    formula.innerHTML = "Multiplica el valor de temperatura por 1";
                    break;
                }
                case "F": {
                    var calculo = ((num3.value * (9/5))+32);
                    num4.value = calculo;
                    formula.innerHTML=("("+num3.value+"°C x 9/5) + 32 = "+num4.value+"°F");
                    break;
                }
                case "K": {
                    var calculo = ((num3.value)+(273.15));
                    num4.value = calculo;
                    formula.innerHTML=(num3.value+"°C + 273.15 = "+num4.value+"K");
                    break;
                }
            }
            break;
        }
        case "F": {
            switch (d) {
                case "Ce": {
                    var calculo = ((num3.value - 32)*(5/9));
                    num4.value = calculo;
                    formula.innerHTML = ("("+num3.value+"°F - 32) x 5/9 = "+num4.value+"°C");
                    break;
                }
                case "F": {
                    var calculo = num3.value * 1;
                    num4.value = calculo;
                    formula.innerHTML="Multiplica el valor de temperatura por 1";
                    break;
                }
                case "K": {
                    var calculo = ((num3.value - 32)*(5/9)+273.15);
                    num4.value = calculo;
                    formula.innerHTML = ("("+num3.value+"°F - 32) x 5/9 + 273.15 = "+num4.value+"K");
                    break;
                }
            }
            break;
        }
        case "K": {
            switch (d) {
                case "Ce": {
                    var calculo = (num3.value - 273.15);
                    num4.value = calculo;
                    formula.innerHTML = (num3.value+"K - 273.15 = "+num4.value+"°C");
                    break;
                }
                case "F": {
                    var calculo = ((num3.value - 273.15)*(9/5)+32);
                    num4.value = calculo;
                    formula.innerHTML = ("("+num3.value+"K - 273.15) x 9/5 + 32 = "+num4.value+"°F");
                    break;
                }
                case "K": {
                    var calculo = num3.value * 1;
                    num4.value = calculo;
                    formula.innerHTML="Multiplica el valor de temperatura por 1";
                    break;
                }
            }
            break;
        }
    }
}

function masa(){
    var num5 = document.getElementById('num5');
    var num6 = document.getElementById('num6');
    var e = document.getElementById('e').value;
    var f = document.getElementById('f').value;
    var formula = document.getElementById('formula');

    switch (e){
        case "mg":{
            switch (f){
                case "mg":{
                    var calculo = num5.value * 1;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1";
                    break;
                }
                case "g": {
                    var calculo = num5.value / 1000;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa entre 1000";
                    break;
                }
                case "Kg": {
                    var calculo = num5.value / 1e+6;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa entre 1e+6";
                    break;
                }
                case "ton": {
                    var calculo = num5.value / 1e+9;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa entre 1e+9";
                    break;
                }
                case "lbs": {
                    var calculo = num5.value / 453592;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 453592";
                    break;
                }
                case "Oz": {
                    var calculo = num5.value / 28350;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 28350";
                    break;
                }
            }
            break;
        }
        case "g": {
            switch (f){
                case "mg":{
                    var calculo = num5.value * 1000;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1000";
                    break;
                }
                case "g": {
                    var calculo = num5.value * 1;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1";
                    break;
                }
                case "Kg": {
                    var calculo = num5.value / 1000;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa entre 1000";
                    break;
                }
                case "ton": {
                    var calculo = num5.value / 1e+6;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa entre 1e+6";
                    break;
                }
                case "lbs": {
                    var calculo = num5.value / 454;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 454";
                    break;
                }
                case "Oz": {
                    var calculo = num5.value / 28.35;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 28.35";
                    break;
                }
            }
            break;
        }
        case "Kg": {
            switch (f){
                case "mg":{
                    var calculo = num5.value * 1e+6;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1e+6";
                    break;
                }
                case "g": {
                    var calculo = num5.value * 1000;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1000";
                    break;
                }
                case "Kg": {
                    var calculo = num5.value * 1;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1";
                    break;
                }
                case "ton": {
                    var calculo = num5.value / 1000;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa entre 1000";
                    break;
                }
                case "lbs": {
                    var calculo = num5.value * 2.205;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 2.205";
                    break;
                }
                case "Oz": {
                    var calculo = num5.value * 35.274;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 35.274";
                    break;
                }
            }
            break;
        }
        case "ton": {
            switch (f){
                case "mg":{
                    var calculo = num5.value * 1e+9;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1e+9";
                    break;
                }
                case "g": {
                    var calculo = num5.value * 1e+6;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1e+6";
                    break;
                }
                case "Kg": {
                    var calculo = num5.value * 1000;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1000";
                    break;
                }
                case "ton": {
                    var calculo = num5.value * 1;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1";
                    break;
                }
                case "lbs": {
                    var calculo = num5.value * 2205;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 2205";
                    break;
                }
                case "Oz": {
                    var calculo = num5.value * 35274;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 35274";
                    break;
                }
            }
            break;
        }
        case "lbs": {
            switch (f){
                case "mg":{
                    var calculo = num5.value * 453592;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 453592";
                    break;
                }
                case "g": {
                    var calculo = num5.value * 454;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 454";
                    break;
                }
                case "Kg": {
                    var calculo = num5.value / 2.205;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 2.205";
                    break;
                }
                case "ton": {
                    var calculo = num5.value / 2205;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 2205";
                    break;
                }
                case "lbs": {
                    var calculo = num5.value * 1;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1";
                    break;
                }
                case "Oz": {
                    var calculo = num5.value * 16;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 16";
                    break;
                }
            }
            break;
        }
        case "Oz": {
            switch (f){
                case "mg":{
                    var calculo = num5.value * 28350;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 28350";
                    break;
                }
                case "g": {
                    var calculo = num5.value * 28.35;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, multiplica el valor de masa por 28.35";
                    break;
                }
                case "Kg": {
                    var calculo = num5.value / 35.274;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 35.274";
                    break;
                }
                case "ton": {
                    var calculo = num5.value / 35274;
                    num6.value = calculo;
                    formula.innerHTML = "Para obtener un resultado aproximado, divide el valor de masa entre 35274";
                    break;
                }
                case "lbs": {
                    var calculo = num5.value / 16;
                    num6.value = calculo;
                    formula.innerHTML = "Divide el valor de masa enter 16";
                    break;
                }
                case "Oz": {
                    var calculo = num5.value * 1;
                    num6.value = calculo;
                    formula.innerHTML = "Multiplica el valor de masa por 1";
                    break;
                }
            }
            break;
        }
    }
}