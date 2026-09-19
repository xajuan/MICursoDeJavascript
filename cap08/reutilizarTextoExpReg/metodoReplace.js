// Declaración de patrón con bloques
var patron = new RegExp("re(\\w+)", "i");
// Declaración de variable
var frase = "debo rehacer esto";
// Reutilizar texto con $&
console.log(frase.replace(patron, "$& todo"));
// Reutilizar texto con $n
console.log(frase.replace(patron, "volver a $1"));
// Declaración de patrón con bloques anidados
var patron2 = new RegExp("(re(\\w+))", "gi");
// Reutilizar texto del patron
console.log(frase.replace(patron2, "$1 (volver a $2)"));
// Declaración de variable
var frase = "debo rehacer esto";
// Reutilizar texto con $`
console.log(frase.replace(patron, ", y solo $`,"));
// Declaración de variable
var frase = "debo rehacer esto";
// Reutilizar texto con $´
console.log(frase.replace(patron, "$', y solo"));
// Declaración de variable
var frase = "debo rehacer esto"
// Reutilizar texto con $$
console.log(frase.replace(patron, "$$35 por"));