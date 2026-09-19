// Declaración de objeto
var coche1 = { marca: "Fiat" };
// Intentamos clonar
var coche2 = coche1;
var coche3 = new Object(coche1);
// Modificamos la propiedad
coche3.marca = "Seat";
// Mostramos valores
console.log(coche1);
console.log(coche2);
console.log(coche3);
console.log();
// Clonar con el método assign
console.log("Clonar con el método assign");
// Declaración de objeto
var coche1 = { marca: "Fiat" };
// Clonamos el objeto
var coche2 = Object.assign({}, coche1);
// Modificamos la propiedad
coche2.marca = "Seat";
// Mostramos valores
console.log(coche1);
console.log(coche2);
console.log();
// Otro ejemplo
// Declaración de objeto
var coche1 = {
    marca: "Fiat",
    motor: {
        combustible: "Gasolina"
    }
};
// Clonamos el objeto
var coche2 = Object.assign({}, coche1);
// Modificamos la propiedad
coche2.marca = "Seat";
// Mostramos valores propiedad
console.log(coche1.marca);
console.log(coche2.marca);
// Modificamos propiedad objeto
coche2.motor.combustible = "Diesel";
// Mostramos valores propiedad
console.log(coche1.motor);
console.log(coche2.motor);
console.log();
// Clonar objeto convertiendolo en una cadena JSON
// Declasración de objeto
var coche1 = {
    marca: "Fiat",
    motor: {
        combustible: "Gasolina"
    }
};
// Clonamos el objeto por completo
var coche2 = JSON.parse(JSON.stringify(coche1));
// Modificamos propiedad
coche2.marca = "Seat";
// Mostramos valores propiedad
console.log(coche1.marca);
console.log(coche2.marca);
// Modificamos propiedad objeto
coche2.motor.combustible = "Diesel";
// Mostramos valores propiedad
console.log(coche1.motor.combustible);
console.log(coche2.motor.combustible);