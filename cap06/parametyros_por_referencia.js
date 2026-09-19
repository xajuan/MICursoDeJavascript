// Declaración de variable
var cinco = 5;
// Declaración de función con un parámetro
function modificar(numero) {
    // Modificamos el valor del parámetro
    numero = numero * 2;
    console.log(`Valor dentro de la función: ${numero}`);
}
// Llamada a la función con una variable
modificar(cinco);
// La variable valor no ha sido modificada
console.log(`Valor fuera de la función: ${cinco}`);