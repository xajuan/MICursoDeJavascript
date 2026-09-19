var cinco = 5, diez = 10;
// Declaración de constante
const MAXIMO = 25;
// Declaración de función con dos parámetros
function sumar(numero1, numero2) {
    var resultado = numero1 + numero2;
    console.log("La suma es: " + resultado);
}
// Declaración de función con tres parámetros
function sumarTresNumeros(num1, num2, num3) {
    var resultado = num1 + num2 + num3;
    console.log("La suma es: " + resultado)
}
// LLamada a la función con dos valores
sumar(2, 4);
sumar(cinco, 10);
// Llamada a la función con tres valores
sumarTresNumeros(MAXIMO, 5, diez);
sumarTresNumeros(0, 10, cinco);