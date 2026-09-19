// Creación de objeto.
var miJSON = {
    "marca": "Fiat",
    "numeroPlazas": 5,
    "turismo": true,
    "extras": null,
    // JSON anidado
    "motor" : {
        "cilindrada": 1.2,
        "combustible": "Gasolina"
    }
};
console.log(miJSON.marca);
console.log(miJSON["turismo"]);
console.log(miJSON.motor);
console.log(miJSON.motor.cilindrada);
console.log(miJSON.modelo);