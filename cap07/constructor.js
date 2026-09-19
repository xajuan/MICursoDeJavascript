// Propiedades y métodos
// message
console.log("message");
// Creación de instancia
var error = new Error("Has superado el máximo de unidades permitidas.");
console.log(error.message);
// Error en código (variable no definida)
try {
    num2 = num1 + 3;
} catch (excepcion) {
    console.log(`Mensaje: ${excepcion.message}`);
}

// name
console.log("name");
// Creación de instancia
var error = new Error("Has superado el máximo de unidades permitidas.");
console.log(error.name);
error.name = "LimiteUnidades";
console.log(error.name);
// Error en código (variable no definida)
try {
    num2 = num1 + 3;
} catch (excepcion) {
    console.log(`Nombre: ${excepcion.name}`);
}
console.log();

// Excepción de JavaScript
console.log("Excepción de JavaScript");
try {
    var num2 = num1 + 3;
} catch (excepcion) {
    console.log(`Excepción: ${excepcion.name}`);
    console.log(`Mensaje: ${excepcion.message}`);
}

console.log();
// Excepción personalizada
console.log("Excepción personalizada");
try {
    var unidades = 5;
    if (unidades > 3) {
        unidades = 0;
        throw new Error("Has superado el máximo de unidades permitidas.");
    }
} catch (excepcion) {
    console.log(`Excepción: ${excepcion.name}`);
    console.log(`Mensaje: ${excepcion.message}`);
}