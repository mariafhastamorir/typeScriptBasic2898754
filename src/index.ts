import { Estudiante } from "./Estudiante"
import recorrerEstudiantes from "./recorrerEstudiantes"
import { insertarEstudiante
        , actualizarEstudiante
        , borrarEstudiante } from "./operaciones"

//Definir objetos(literal) estudiante
const estudiante1: Estudiante = {
    nombre: "Maria",
    apellido: "Hastamorir",
    edad: 18,
    tipoIdentificacion: "C.C",
    numeroIdentificacion: 1011095562
}

const estudiante2: Estudiante = {
    nombre: "Angie",
    apellido: "Sosa",
    edad: 17,
    tipoIdentificacion: "T.I",
    numeroIdentificacion: 12345678
}

const estudiante3: Estudiante = {
    nombre: "Juliana",
    apellido: "Salgar",
    edad: 18,
    tipoIdentificacion: "C.C",
    numeroIdentificacion: 76543243
}

//Crear un arreglo de estudiantes
const listaEstudiantes : Estudiante[] =[estudiante1, estudiante2]
console.log("--------Antes de agregar----")
console.log(listaEstudiantes)

//recorrer el arreglo

recorrerEstudiantes(listaEstudiantes);

//operaciones con arreglos

console.log("--------Despues de agregar ----")
insertarEstudiante(estudiante3, listaEstudiantes)
console.log(listaEstudiantes)

borrarEstudiante(2, listaEstudiantes)
console.log("--------Despues de borrar ----")
console.log(listaEstudiantes)
