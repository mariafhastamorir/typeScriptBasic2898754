"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    //insertar un elemento a un arreglo en java script
    //instrucciones para agregar un estudiante al arreglo de estudiantes 
    //metodo de array en js permite insertar un elemento al arreglo
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiante = function (indice, arregloEstudiantes, nombre, apellido) {
    //instrucciones para actualizar el estudiante, que
    // se encuentre en el indice indicado en el parametro
};
exports.actualizarEstudiante = actualizarEstudiante;
const borrarEstudiante = function (indice, arregloEstudiantes) {
    //Instrucciones para eliminar un elemento del arreglo que 
    //este en el indice del parametro
    arregloEstudiantes.splice(indice, 1);
};
exports.borrarEstudiante = borrarEstudiante;
