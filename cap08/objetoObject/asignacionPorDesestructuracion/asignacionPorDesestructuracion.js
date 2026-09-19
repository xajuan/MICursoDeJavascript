// Declaración de objeto
var coche = { marca: "Fiat", color: "Rojo" };
// Extraemos los valores
var { marca, color } = coche;
// Mostramos los valores
console.log(marca);
console.log(color);
// Extraemos valor no existente
var { modelo } = coche;
// Mostramos el valor
console.log(modelo);
