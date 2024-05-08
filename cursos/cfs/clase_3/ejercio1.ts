import * as readlineSync from "readline-sync";
let precioProducto = readlineSync.questionInt("Ingrese el Precio del producto");
let descuentoProducto:number = (precioProducto*0.1);
let precioFinal:number = precioProducto - descuentoProducto;

console.log ("El precio final de su producto" + precioFinal);