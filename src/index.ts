/* Intento Ejercicio 4
Escribe una función iterativa que dado un número entero n,
retorne un array con todos los números enteros en orden decreciente desde n a 1. 
Ejemplo: si me ingresan un 5, lo q va a devolver el programa sera [5,4,3,2,1]*/

let numeroIngresado = <HTMLInputElement>document.getElementById("numeroIngresado");
let btnEnviar = <HTMLElement>document.getElementById("btnEnviar");

btnEnviar.addEventListener("click" , () => {
numeroIngresado.innerHTML = "Ingrese numero" 
let n : number = Number(numeroIngresado.value) 
  let arreglox: number[] = new Array (n);
  for(let i : number = 0; i <= n ; i ++){
   //for(i = n; i>=1; i-- ) si se activa rompe el programa.
   { 
     console.log(arreglox[i]);
      }
} 

//No solo no logre codearlo con funciones, me supero la logica, tampoco lo pude hacer funcionar sin ellas. 
//+Incapacidad para imprimir por pantalla.
