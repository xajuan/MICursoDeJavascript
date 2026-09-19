// search(patron)
// Declaración de variable
var nombre = new String("Dado");
console.log(nombre.search(/z/));
console.log(nombre.search(/d/));
console.log(nombre.search(/d/i));
console.log(nombre.search(/\w/));
// Acceso al resultado
var posicion = nombre.search(/\w/);
console.log(nombre[posicion]);
