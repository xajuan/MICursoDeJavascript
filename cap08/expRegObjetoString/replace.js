// replace(busqueda, reemplazo)
// Creación de instancia
var palabra = new String("Dado");
// Declaración de variable
var resultado = "";
// Declaración de función
function enMayusculas(cadena) {
    return cadena.toUpperCase();
}
// Reemplazo de cadenas
resultado = palabra.replace(/z/, "Z");
console.log(resultado);
resultado = palabra.replace(/d/, "t");
console.log(resultado);
resultado = palabra.replace(/d/i, "L");
console.log(resultado);
resultado = palabra.replace(/d/gi, "r");
console.log(resultado);
resultado = palabra.replace(/\w/, cadena => cadena.toLowerCase());
console.log(resultado);
resultado = palabra.replace(/\w/g, enMayusculas);
console.log(resultado);