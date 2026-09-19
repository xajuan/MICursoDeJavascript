// Declaración de patrón
var patron = new RegExp("re(\\w+)", "i");
// Declaración de variables
var frase = "debo rehacer esto";
var coincidencias;
// Recuperación de resultados
coincidencias = frase.match(patron);
console.log(coincidencias);
coincidencias = patron.exec(frase);
console.log(coincidencias);
console.log();

// Declaración de patrón
var patron2 = new RegExp("re(\\w+)", "i");
// Declaración de variables
var frase = "debo rehacer esto";
var coincidencias;
// Recuperación de texto del patrón
coincidencias = frase.match(patron);
console.log(coincidencias);
coincidencias = patron.exec(frase);
console.log(coincidencias);
console.log();
// Declaración de patrón con bloques anidados
var patron = new RegExp("r(e(\\w+))", "i");
// Recuperación de texto del patrón
coincidencias = frase.match(patron);
console.log(coincidencias);
coincidencias = patron.exec(frase);
console.log(coincidencias);