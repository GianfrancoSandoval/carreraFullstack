import * as rls from 'readline-sync';

let numero: number = 9; // Número para el que se mostrará la tabla de multiplicación
let limite: number = rls.questionInt("Ingrese hasta que numero desea mostrar la tabla de multiplicacion del 9: ");

console.log("Tabla de multiplicación del 9 hasta el " + limite);
for (let i: number = 1; i <= limite; i++) {
    console.log("9 x " + i + " = " + (9 * i));
    }
