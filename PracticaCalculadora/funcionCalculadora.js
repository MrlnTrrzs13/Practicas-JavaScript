var num1;
var num2;
var operacion;

function operaciones() {
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var raiz = document.getElementById('raiz');
    var potencia = document.getElementById('potencia');
    var division = document.getElementById('division');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var multiplicacion = document.getElementById('multiplicacion');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var resta = document.getElementById('resta');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var suma = document.getElementById('suma');
    var cero = document.getElementById('cero');
    //var punto = document.getElementById('punto');
    var porcentaje = document.getElementById('porcentaje');
    var igual = document.getElementById('igual');

    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    potencia.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "^2";
        resolver();
    }
    raiz.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "√";
        resolver();
    }
    porcentaje.onclick = function (e) {
        num1 = resultado.textContent;
        operacion = "%";
        limpiar();
    }
    igual.onclick = function (e) {
        num2 = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}
function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            res = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            res = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            res = parseFloat(num1) / parseFloat(num2);
            break;
        case "^2":
            res = (Math.pow(num1, 2));
            break;
        case "√":
            res = (Math.sqrt(num1));
            break;
        case "%":
            res = parseFloat(num2) / 100 * parseFloat(num1);
            break;
    }
    resetear();
    resultado.textContent = res;
}