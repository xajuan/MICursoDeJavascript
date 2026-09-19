// Definición de funciones de incremento
function incrementarUno(numero) {
    return numero + 1;
}
function incrementarDos(numero) {
    return numero + 2;
}
function incrementarTres(numero) {
    return numero + 3;
}
// Uso de funciones
console.log(incrementarUno(5));
console.log(incrementarUno(14));
console.log(incrementarDos(3));
console.log(incrementarDos(41));
console.log(incrementarTres(6));
console.log(incrementarTres(90));

// Definición de closure
function generarFuncion(incremento) {
    return function(numero) {
        return numero + incremento;
    }
}
// Definición de funciones de incremento
var incrementarUno = generarFuncion(1);
var incrementarDos = generarFuncion(2);
var incrementarTres = generarFuncion(3);
// Uso de funciones
console.log(incrementarUno(5));
console.log(incrementarUno(14));
console.log(incrementarDos(3));
console.log(incrementarDos(41));
console.log(incrementarTres(6));
console.log(incrementarTres(90));