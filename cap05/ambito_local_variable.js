function acelerar(velocidad) {
    var reultado;
    if (velocidad < 120) {
        resultado = velocidad + 5;
    } else {
        resultado = velocidad;
    }
    return resultado;
}
// Llamada a la función
console.log(acelerar(80));
console.log(acelerar(130));
// Uso variable local
console.log(resultado);

// Estructura con una variable local
if (5 < 25) {
    let menor = true;
    // Uso de la variable local
    console.log(menor);
}
// Uso de la variable local
console.log(menor);