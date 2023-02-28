let free = false;
acceso = (time) => {
    let edad = prompt("¿Cual es tú edad?");
    if(edad >= 18){
        if( time >= 2  && time < 7 && free == false){
            alert("Puedes pasar y es totalmente Gratis.");
            free = true;
        }
        else {
            alert("Puedes pasar pero, tienes que pagar.");
        }
    }
    else {
        alert("Lo ciento no puedes pasar eres menor de edad");
    }
}

acceso(23);
acceso(2);
acceso(3);