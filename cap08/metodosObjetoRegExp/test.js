// test(texto)
// Declaración de variable
var texto = "JavaScript mola mucho";
// Creación de instancia
var patron1 = new RegExp("script", "g");
console.log(patron1.test("hola"));
console.log(patron1.test(texto));
console.log(patron1.test("Mi script"));
// Instancia como valor literal
var patron2 = /script/i;