// is(valor1, valor2) - Compara dos valores y devuelve true si son iguales, false de lo contrario
// Declaración de variables
console.log("is(valor1, valor2)");
var numero = 5;
// Uso del método
console.log(Object.is(numero, 5)); // true
console.log(Object.is(numero, '5')); // false
// Declaración de objetos
var coche1 = { marca: 'Fiat' };
var coche2 = { marca: 'Fiat' };
var coche3 = coche1;
// Uso del método
console.log(Object.is(coche1, coche1)); // true
console.log(Object.is(coche1, { marca: 'Fiat'})); // false
console.log(Object.is(coche1, coche2)); // false
console.log(Object.is(coche1, coche3)); // true
console.log();

// keys(objeto) - Devuelve un array con las propiedades enumerables de un objeto
// Declaración de objetos
console.log("keys(objeto)");
var unCoche = {
    marca: "Fiat",
    numPlazas: 5,
    acelerar: function(){}
};
var miJSON = {
    "motor": {
        "cilindrada": 1.2,
        "combustible": "Gasolina"
    },
    "color": "Rojo",
};
// Uso del método
console.log(Object.keys(unCoche)); // ["marca", "numPlazas", "acelerar"]
console.log(Object.keys(miJSON)); // ["motor", "color"]
console.log();

// values(objeto) - Devuelve un array con los valores de las propiedades enumerables de un objeto
// Declaración de objetos
console.log("values(objeto)");
var unCoche = {
    marca: "Fiat",
    numPlazas: 5,
    acelerar: function () {}
};
var miJSON = {
    "motor": {
        "cilindrada": 1.2,
        "combustible": "Gasolina",
    },
    "color": "Rojo",
};
console.log();
// Uso del método
console.log(Object.values(unCoche)); // ["Fiat", 5, function () {}]
console.log(Object.values(miJSON)); // [{ cilindrada: 1.2, combustible: "Gasolina" }, "Rojo"]
console.log();

// entries(objeto) - Devuelve un array con los pares clave-valor de las propiedades enumerables de un objeto
// Declaración de objetos
console.log("entries(objeto)");
var unCoche = {
    marca: "Fiat",
    numPlazas: 5,
    acelerar: function () {}
};
// Uso del método
console.log(Object.entries(unCoche)); // [["marca", "Fiat"], ["numPlazas", 5], ["acelerar", function () {}]]
console.log();
// assign(destino, objeto1, objeto2, ..., objetoN)
console.log("assign(destino, objeto1, objeto2, ..., objetoN)");
// Declaración de objetos
var unCohe = {
    marca: "Fiat",
    numPlazas: 5,
    acelerar: function() {
        console.log("brummmm");
    }
};
var colorCoche = {
    color: "Rojo"
};
// Copiamos valores
var nuevoCoche = Object.assign(unCoche, colorCoche);
    // El resultado es el objeto destino
    console.log(Object.is(unCoche, nuevoCoche)); // true
    // Mostramos valores
    console.log(unCoche);
    // Sobreescribimos un valor
    Object.assign(unCoche, {color: "azul", modelo: "Punto"});
    console.log(unCoche);
    // Sobreescribimos un valor con dos objetos
    Object.assign(unCoche, {color: "azul", modelo: "Punto"}, {color: "negro"});
    console.log(unCoche);
    console.log();
// preventExtensions(objeto)
console.log("preventExtensions(objeto)");
// Declaración de objetos
var unCoche = { marca: "Fiat" };
// Añadimos propiedad
unCoche.color = "Rojo"; // Sí se realiza
// Mostramos valores
console.log(unCoche);
// Marcamos como no extensible
Object.preventExtensions(unCoche);
// Añadimos propiedad
unCoche.modelo = "Punto";   // No se realiza
// Modificamos propiedad
unCoche.color = "Azul";     // Sí se realiza
// Mostramos valores
console.log(unCoche);
// Eliminamos propiedad
delete unCoche.color;       // Sí se realiza
// Mostramos valores
console.log(unCoche);
console.log();
// seal(objeto)
console.log("seal(objeto)");
// Declaración de objeto
var unCoche = { marca: "Fiat" };
// Añadimos propiedad
unCoche.color = "Rojo";     // Sí se realiza
// Mostramos valores
console.log(unCoche);
// Marcamos como sellado
Object.seal(unCoche);
// Añadimos propiedad
unCoche.modelo = "Punto";   // No se realiza
// Modificamos propiedad
unCoche.color = "Azul";     // Sí se realiza
// Mostramos valores
console.log(unCoche);
// Eliminamos propiedad
delete unCoche.color;       // No se reliza
// Mostramos valores
console.log(unCoche);
console.log();
// freeze(objeto)
console.log("freeze(objeto)");
// Declaración de objeto
var unCoche = { marca: "Fiat"};
// Añadimos propiedad
unCoche.color = "Rojo";     // Sí se realiza
// Mostramos valores
console.log(unCoche);
// Marcamos como freeze
Object.freeze(unCoche);
// Añadimos propiedad
unCoche.modelo = "Punto";   // No se realiza
// Modificamos propiedad
unCoche.color = "Azul";     // No se realiza
// Mostramos valores
console.log(unCoche);
// Eliminamos propiedad
delete unCoche.color;       // No se realiza
console.log(unCoche);
console.log();
// isExtensible(objeto), isSealed(objeto), isFrozen(objeto)
// Declaración de objetos
var coche1 = { marca: "Seat" };
var coche2 = { marca: "Fiat" };
var coche3 = { marca: "Honda" };
var coche4 = { marca: "Hyundai" };
// Declaración de función
function mostrarEstado(coche) {
    var estado = `El estado del coche ${coche.marca} es:
    Extensible: ${Object.isExtensible(coche)}
    Sellado: ${Object.isSealed(coche)}
    Congelado: ${Object.isFrozen(coche)}`;
    console.log(estado);
}
// Marcamos conmo no extensible
Object.preventExtensions(coche2);
// Marcamos como sellado
Object.seal(coche3);
// Marcamos como congelado
Object.freeze(coche4);
// Mostramos valores
mostrarEstado(coche1);
console.log();
mostrarEstado(coche2);
console.log();
mostrarEstado(coche3);
console.log();
mostrarEstado(coche4);
console.log();