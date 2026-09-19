// Declaración de constante global
const MAXIMO = 120;
// Declaración de una función con una variable local
function acelerar(velocidad) {
    var resultado;
    // Uso de constante global
    if (velocidad < MAXIMO) {
        resultado = velocidad + 5;
    } else {
        resultado = velocidad;
    }
    console.log(`Velocidad: ${resultado} km/h`);
    return resultado;
}
// Llamadas a función
acelerar(0);
acelerar(130);
// Uso de constante global
console.log(MAXIMO);
// Uso de variable local
console.log(resultado); // Error, variable no definida