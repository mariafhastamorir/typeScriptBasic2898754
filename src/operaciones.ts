import { Estudiante } from "./Estudiante"

export const insertarEstudiante = 
            function (estudiante:Estudiante, arregloEstudiantes: Estudiante[]){
                //insertar un elemento a un arreglo en java script
                //instrucciones para agregar un estudiante al arreglo de estudiantes 
                //metodo de array en js permite insertar un elemento al arreglo
        arregloEstudiantes.push(estudiante);
}

export const actualizarEstudiante =
            function( indice: number, 
                      arregloEstudiantes : Estudiante[],
                      nombre: String,  
                      apellido: String){
                //instrucciones para actualizar el estudiante, que
                // se encuentre en el indice indicado en el parametro
}

export const borrarEstudiante =
            function(indice: number,
                arregloEstudiantes: Estudiante[] ){
        //Instrucciones para eliminar un elemento del arreglo que 
        //este en el indice del parametro
        arregloEstudiantes.splice(indice, 1)

}