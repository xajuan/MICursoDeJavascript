// spread
// Declaración de objeto
var coche1 = {marca: "Fiat"};
// Copiamos el objeto con el operador de propagación
var coche2 = { ...coche1 };
// Mostramos valores
console.log(coche1);
console.log(coche2);

// No se puede clonar un objeto por completo
// Declaración de objeto
var coche3 = {
    marca: "Fiat",
    motor: {
        combustible: "Gasolina"
    }
};

// Copiamos el objeto
var coche4 = { ...coche3 };
// Modificamos la propiedad
coche4.marca = "Seat";
// Mostramos valores propiedad
console.log(coche3.marca);
console.log(coche4.marca);
// Modificamos propiedad objeto
coche4.motor.combustible = "Diesel";
// Mostramos valores propiedad
console.log(coche3.motor);
console.log(coche4.motor);

// Este operador se puede usar más de una vez