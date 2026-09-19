// stringify(valor, fnReemplazo, espacios): Convierte un valor de JavaScript a una cadena JSON. Es útil para serializar objetos, arreglos, números, booleanos y otros tipos de datos a formato JSON.
// Objeto definido con llaves
var unCoche = {
    marca: "Fiat",
    numeroPlazas: 5,
    descripcion: `Fiat viene de las siglas en latín "Fabbrica Italiana Automobili Torino" (Fábrica Italiana de Automóviles de Turín).`
};
console.log(JSON.stringify(unCoche));
console.log();

// fnRemplazo
// Declaración de función
function enMayusculas(clave, valor) {
    return (typeof valor === "string") ? valor.toUpperCase() : valor;
}
// Objeto definido con llaves
var unCoche = {
    marca: "Fiat",
    numeroPlazas: 5,
    descripcion: `Fiat viene de las siglas en latín "Fabbrica Italiana Automobili Torino" (Fábrica Italiana de Automóviles de Turín).`
};
console.log(JSON.stringify(unCoche, enMayusculas));
console.log();

// Otro ejemplo de fnReemplazo
// Declaración de función
function quitarTexto(clave, valor) {
    return (typeof valor === "string") ? undefined : valor;
}
// Objeto definido con llaves
var unCoche = {
    marca: "Fiat",
    numeroPlazas: 5,
    descripcion: `Fiat viene de las siglas en latín "Fabbrica Italiana Automobili Torino" (Fábrica Italiana de Automóviles de Turín).`
};
console.log(JSON.stringify(unCoche, quitarTexto));
console.log();

// espacios
// Objeto definido con llaves
function quitarTexto(clave, valor) {
    return (typeof valor === "string") ? undefined : valor;
}
// Objeto definido con llaves
var unCoche = {
    marca: "Fiat",
    numeroPlazas: 5,
    descripcion: `Fiat viene de las siglas en latín "Fabbrica Italiana Automobili Torino" (Fábrica Italiana de Automóviles de Turín).`
};
// Conversión con función y espaciado de 5
console.log(JSON.stringify(unCoche, quitarTexto, 5));
console.log();
// Conversión solo con espaciado de 5
console.log(JSON.stringify(unCoche, null, 5));
console.log();

// Cadena en lugar de espacios
// Declaración de función
function quitarTexto(clave, valor) {
    return (typeof valor === "string") ? undefined : valor;
}
// Objeto definido con llaves
var unCoche = {
    marca: "Fiat",
    numeroPlazas: 5,
    descripcion: `Fiat viene de las siglas en latín "Fabbrica Italiana Automobili Torino" (Fábrica Italiana de Automóviles de Turín).`
};
// Conversión con función y espaciado de 3 '>>>'
console.log(JSON.stringify(unCoche, quitarTexto, '>>>'));
console.log();
// Conversión solo con espaciado de 3 '>>>'
console.log(JSON.stringify(unCoche, null, '>>>'));
console.log();

// parse(texto, fnReemplazo): Convierte una cadena JSON a un valor de JavaScript. Es útil para deserializar datos JSON en objetos, arreglos, números, booleanos y otros tipos de datos de JavaScript.
// Declaración de variables
var texto1 = `{"marca": "Fiat", "numeroPlazas": 5}`;
var texto2 = `{"descripcion": "Fiat viene de las siglas en latín \\"Fabbrica Italiana Automobili Torino\\" (Fábrica Italiana de Automóviles de Turín)."}`;
console.log(JSON.parse(texto1));
console.log(JSON.parse(texto2));
console.log();
// Declaración de variables con errores
var texto3 = `{marca: "Fiat", numeroPlazas: 5}`;
var texto4 = `{descripcion: "Fiat viene de las siglas en latín "Fabbrica Italiana Automobili Torino" (Fábrica Italiana de Automóviles de Turín)."}`;
//console.log(JSON.parse(texto3));
// console.log(JSON.parse(texto4));

// fnReemplazo
// Declaración de variable
var texto = `{"marca": "Fiat", "numeroPlazas": 5}`;
// Declaración de función
function enMayusculas(clave, valor) {
    return (typeof valor === "string") ? valor.toUpperCase() : valor;
}
// Creación de objeto JSON a partir de texto con función de reemplazo
var miJSON = JSON.parse(texto, enMayusculas);
console.log(miJSON);
console.log(JSON.stringify(miJSON));