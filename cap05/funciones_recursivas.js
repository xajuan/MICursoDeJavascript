// Declaración de la función
function calcularSumatorio(hasta) {
    var sumatorio = 0;
    var i = 1;
    // Condición de parada
    while (i <= hasta) {
        sumatorio += i;
        i++;
    }
    return sumatorio;
}
// LLamada a la función
console.log(calcularSumatorio(5));

// Con una función recursiva
function calcularSumatorio2(hasta) {
    if (hasta == 0) {
        return 0;
    } else {
        return hasta + calcularSumatorio2(hasta - 1);
    }
}
// LLamada a la función
console.log(calcularSumatorio2(5));