"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("Ingrese el Precio del producto");
var descuentoProducto = (precioProducto * 0.1);
var precioFinal = precioProducto - descuentoProducto;
console.log("El precio final de su producto" + precioFinal);
