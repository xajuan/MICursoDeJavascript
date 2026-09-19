// Declaración de variable global
var resultado;
// Declaración de función
function acelerar(velocidad) {
    if (velocidad < 120) {
        resultado = velocidad + 5;
    } else {
        resultado = velocidad;
    }
    console.log(`Velocidad: ${resultado} km/h`);
    return resultado;
}
// LLamada a la función
acelerar(80);
acelerar(130);
// Uso de la variable global
console.log(resultado);