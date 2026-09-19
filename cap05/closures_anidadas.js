// Definición de closure con dos niveles hijo
function calculaVolumen(ancho) {
    // Función hija de de calcularVolumen y padre de la siguiente
    return function(alto) {
        // Función hija
        return function(profundo) {
            return ancho * alto * profundo;
        }
    }
}
// Uso de closure
console.log(calculaVolumen(2)(3)(10));
// Definición de función con ancho fijo
var figuraAnchoDos = calculaVolumen(2);
// Cálculo de volumen
console.log(figuraAnchoDos(3)(10));
// Definición de función para figuras con ancho y alto fijo
var figuraAnchoDosAltoTres = figuraAnchoDos(3);
// Cálculo del volumen
console.log(figuraAnchoDosAltoTres(10));