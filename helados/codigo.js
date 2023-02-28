let boton = document.getElementById("btn").addEventListener("click", btnclick);

function btnclick(){
    let nombre = prompt("¿Cuál es tu nombre?");
    let dinero = prompt(nombre + " ¿Cuánto dinero tienes?");
    let agua = 0.6, crema = 1, combinado = 1.5, combo = 2.5, resultado = 0;

    if(dinero >= 0.6 && dinero < 1){
        alert("Comprate el helado de agua");
        resultado = dinero - agua;
        alert("Su cambio es: " + resultado);
    }
    else if(dinero >= 1 && dinero < 1.6){
        alert ("Comprate el helado de crema");
        resultado = dinero - crema;
        alert("Su cambio es: " + resultado);
    }
    else if(dinero >= 1.6 && dinero < 1.9){
        alert ("Comprate el helado de combinado");
        resultado = dinero - combinado;
        alert("Su cambio es: " + resultado);
    }
    else if (dinero >= 1.9){
        alert ("Comprate un combo");
        resultado = dinero - combo;
        alert("Su cambio es: " + resultado);
    }
    else {
        alert("¡ Lo siento ! " + nombre + " no te alcanza.");
    }
}

