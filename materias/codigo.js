const infoMaterias = (materia) => {
    let materias = {
        Fisica: ["Clemente", "Pedro", "Juan", "Maria", "Roberto", "Alejandra", ],
        Programacion: ["Jesus", "Daniel", "Pedro", "Pablo", "Macarena"],
        Logica: ["Lucero", "Pedro", "Juan", "Pablo", "Maria", "Macarena", "Maria"],
        Calculo: ["Martin", "Juan", "Maria", "Roberto", "Alejandra", "Ramon", "Pedro"],
        Informatica: ["Sofia", "Juan", "Pamela", "Roberto", "Macarena"],
        Ingles: ["Baneza", "Pablo", "Maria", "Alejandra", "Roberto"]
    }
    if (materias[materia] !== undefined) {
        return[materias[materia],materia];
    } else {
        return false;
    }
}

const mostrarInfo = (materia) => {
    let informacion = infoMaterias(materia);

    if(informacion !== false){
        let profesor = infoMaterias(materia)[0][0];
        alumnos = infoMaterias(materia)[0];
        alumnos.shift();
        document.write(`El profesor de ${informacion[1]} es: ${profesor}.<br>
        Los alumnos son: ${alumnos}.<br><br>`);
    }
}

mostrarInfo("Fisica");
mostrarInfo("Programacion");
mostrarInfo("Logica");
mostrarInfo("Calculo");
mostrarInfo("Informatica");
mostrarInfo("Ingles");