"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese su numero");
if (numero == 0) {
    console.log("El numero ingresado es cero \n" + numero);
}
else if (numero % 2 == 0) {
    console.log("El numero ingresado es par \n" + numero);
}
else if (numero % 2 != 0) {
    console.log("El Numero ingresado es impar \n" + numero);
}
