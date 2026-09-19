// global, ignoreCase, multiline
console.log("global, ignoreCase, multiline");
// Creación de instancia
var patron1 = new RegExp("hola", "i");
console.log(patron1.global);
console.log(patron1.ignoreCase);
console.log(patron1.multiline);
// instancia como valor literal
patron2 = /hola/gm;
console.log(patron2.global);
console.log(patron2.ignoreCase);
console.log(patron2.multiline);

// flags
// Creación de instancia
