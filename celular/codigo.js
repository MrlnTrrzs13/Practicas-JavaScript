class celular {
    constructor(color, peso, tamaño, camara, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = camara;
        this.memoriaRam =ram;
        this.encendido = false;
    }
    presionarBotonInicio() {
        if(this.encendido == false){
            alert("Celular Encendido");
            this.encendido = true;
        } else {
            alert("Celular Apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if(this.encendido == true){
            alert("reiniciando Celular");
        } else {
            alert("El celular está Apagado");
        }
    }
    tomarFoto() {
        alert(`Foto tomada en una resolución de: ${this.resolucionCamara}`);
    }
    tomarVideo() {
        alert(`Video Grabado en una resolución de: ${this.resolucionCamara}`);
    }
    mobileInfo(){
        return `
        Color: ${this.color} <br>
        Peso: ${this.peso}<br>
        Tamaño: ${this.tamaño}<br>
        Resolucion: ${this.resolucionCamara}<br>
        Memoria Ram: ${this.memoriaRam}`;
    }
}

class celularAltaGama extends celular {
    constructor(color, peso, tamaño, camara, ram, camaraExtra){
        super(color, peso, tamaño, camara, ram);
        this.resolucionCamaraExtra = camaraExtra;
    }
    grabarVideoLento() {
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Activando Reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `<br> Resolucion de Camara extra: ${
            this.resolucionCamaraExtra}`;
    }
}

let celular1 = new celular("rojo", "150g","5'", "hd", "1GB");
let celular2 = new celular("negro", "155g","5.4'", "full hd", "2GB");
let celular3 = new celular("blanco", "150g","5.9'", "full hd", "3GB");

let celular4 = new celularAltaGama("rojo", "130g","5.2'", "4k", "3GB", "hd");
let celular5 = new celularAltaGama("negro", "135g","6'", "4k", "4GB", "full hd");

document.write(`
    ${celular1.mobileInfo()}<br><br>
    ${celular2.mobileInfo()}<br><br>
    ${celular3.mobileInfo()}<br><br>
    ${celular4.infoAltaGama()}<br><br>
    ${celular5.infoAltaGama()}
`);