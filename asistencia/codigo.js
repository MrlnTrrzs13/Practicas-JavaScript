
let numeroAlumnos = prompt("¿Cuántos alumnos tiene la clase?");
let totalAlumnos = [];

for(i = 0; i < numeroAlumnos; i ++) {
    totalAlumnos[i] = [prompt("¿Cuál es el nombre del alumno? " + (i + 1) + ":"),0];
}

const asistencias = (nombre,p) => {
    let presente = prompt(nombre);
    if(presente == "P" || presente == "p"){
        totalAlumnos[p][1]++;
    }
}

for(i = 0; i < 30; i++){
    for(let alumno in totalAlumnos){
        asistencias(totalAlumnos[alumno][0], alumno);
    }
}
for(let alumno in totalAlumnos){

    let resultado =`Nombre del Alumno: ${totalAlumnos[alumno][0]}<br>
                    Asistencia: ${totalAlumnos[alumno][1]}<br>
                    Inasistencia: ${30 - totalAlumnos[alumno][1]}<br>`;
    if(30 - totalAlumnos[alumno][1] > 3){
        resultado += "Reprobado por inasistencia.<br>";
    }
    document.write(resultado);
}

