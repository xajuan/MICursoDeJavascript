let numero = 3;
const BASE = 10;
var resultado = 0;

// Declaración de una función con una variable local
function convertir(numero) {
    numero *= 2;
    var resultado = parseInt(numero, BASE);
    return resultado;
}
// Uso de variables con el mismo nombre
console.log(numero);                // Variable global: 3
console.log(resultado);             // Variable global: 0
console.log(convertir(numero));     // Variable local: 6
console.log(numero);                // Variable global: 3
console.log(resultado);             // Variable global: 0