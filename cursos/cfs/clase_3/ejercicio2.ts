import * as rls from "readline-sync";
let numero:number = rls.questionInt("Ingrese su numero");

if(numero == 0){
        console.log ("El numero ingresado es cero \n" + numero);

} else if(numero  %2 == 0 ){

         console.log ("El numero ingresado es par \n" + numero);
        }

 else if (numero %2 != 0){

         console.log ("El Numero ingresado es impar \n"  + numero);
        }
        