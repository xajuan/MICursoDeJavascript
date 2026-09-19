// Declaración estándar
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
// Declaración ES6
var sumarES6 = (numero1, numero2) => {
    return numero1 + numero2;
}
// Llamadas a la función
resultado = sumar(3, 6);
console.log(resultado);
// Llamadas a la función ES6
resultado = sumarES6(3, 6);
console.log(resultado);
// Otra declaración ES6
var sumaES6 = (numero1, numero2) => numero1 + numero2;
// Llamada a lafunción
resultado = sumaES6(3, 6);
console.log(resultado);