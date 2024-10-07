import { Estudiante } from "./Estudiante";

const recorrerEstudiantes = (arregloEstudiantes: Estudiante[]) => {
    arregloEstudiantes.forEach(function(estudiante){
        console.log(estudiante);
        console.log("-----------")
    })
}

export default recorrerEstudiantes;