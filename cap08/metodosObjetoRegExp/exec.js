// exec(texto)
// Creación de instancia
var patron1 = new RegExp("a", "i");
console.log(patron1.exec("libro"));
console.log(patron1.exec("Advertencia"));
console.log(patron1.lastIndex);
// instancia como valor literal
var patron2 = /A/gi;
console.log(patron2.exec("libro"));
console.log(patron2.exec("Advertencia"));
console.log(patron2.lastIndex);
console.log(patron2.exec("Advertencia"));
console.log(patron2.lastIndex);
console.log(patron2.exec("Advertencia"));
console.log(patron2.lastIndex);