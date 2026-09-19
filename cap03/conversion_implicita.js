var cadena = "6";
var numero = 4;
var texto = "hola";

console.log(cadena + numero); 
console.log(numero + cadena);
console.log(numero + numero);
console.log(texto + numero);
console.log();

// En el resto de operaciones, las cadenas intentarán 
// ser convertidas en un número.

cadena = "6";
numero = 2;

console.log(cadena - numero);
console.log(numero * cadena);
console.log(cadena / numero);
console.log(texto - numero);
console.log(numero < cadena);
console.log();

/**
 *  Los boleanos se convierten en:
 *  true = 1
 *  false = 0
 */

numero = 1;
var verdadero = true;
var falso = false;

console.log(numero + verdadero);
console.log(numero + falso);
console.log(numero > false);
console.log(numero == verdadero);
console.log(numero === verdadero);
