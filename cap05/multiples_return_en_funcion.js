var resultado;
// Declaración de función
function mayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
// Llamadas a la función
resultado = mayor(3, 6);
console.log(resultado);
resultado = mayor(10, 8);
console.log(resultado);