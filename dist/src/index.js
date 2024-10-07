"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
const operaciones_1 = require("./operaciones");
//Definir objetos(literal) estudiante
const estudiante1 = {
    nombre: "Maria",
    apellido: "Hastamorir",
    edad: 18,
    tipoIdentificacion: "C.C",
    numeroIdentificacion: 1011095562
};
const estudiante2 = {
    nombre: "Angie",
    apellido: "Sosa",
    edad: 17,
    tipoIdentificacion: "T.I",
    numeroIdentificacion: 12345678
};
const estudiante3 = {
    nombre: "Juliana",
    apellido: "Salgar",
    edad: 18,
    tipoIdentificacion: "C.C",
    numeroIdentificacion: 76543243
};
//Crear un arreglo de estudiantes
const listaEstudiantes = [estudiante1, estudiante2];
console.log("--------Antes de agregar----");
console.log(listaEstudiantes);
//recorrer el arreglo
(0, recorrerEstudiantes_1.default)(listaEstudiantes);
//operaciones con arreglos
console.log("--------Despues de agregar ----");
(0, operaciones_1.insertarEstudiante)(estudiante3, listaEstudiantes);
console.log(listaEstudiantes);
(0, operaciones_1.borrarEstudiante)(2, listaEstudiantes);
console.log("--------Despues de borrar ----");
console.log(listaEstudiantes);
