// toLowerCase(), toUpperCase(), trim()
// Creación de instancia

var nombre = new String("Alberto");
console.log(nombre.toLowerCase());

// Instancia como valor literal

console.log("Alberto".toUpperCase());
// Creación de instancia

var saludo = new String("       Hola Nico. ");
console.log(saludo.trim());
console.log();

// charAt(indice)
// Creación de instancia

var nombre = new String("Nico");
console.log(nombre.charAt());
console.log(nombre.charAt(0));
console.log(nombre.charAt(3));
console.log(nombre.charAt(10));     // índice fuera de rango
console.log();

// charCodeAt(indice)
// Creación de instancia

var nombre = new String("Alberto");
console.log(nombre.charCodeAt());
console.log(nombre.charCodeAt(0));
console.log(nombre.charCodeAt(3));
console.log(nombre.charCodeAt(10));     // índice fuera de rango
console.log();

// indexOf(texto, desdeIndice), lastIndexOf(texto, desdeIndice)
// Creación de instancia

var nombre = new String("Yolanda");
console.log(nombre.indexOf("a"));
console.log(nombre.indexOf("anda"));
console.log(nombre.indexOf("A"));
console.log(nombre.indexOf("a"));
console.log(nombre.indexOf("a", 4));
console.log();

// Instancia como valor literal

console.log("Yolanda".lastIndexOf("a"));
console.log("Yolanda".lastIndexOf("anda"));
console.log("Yolanda".lastIndexOf("A"));
console.log("Yolanda".lastIndexOf("a", 5));
console.log();

// includes(texto, inicio)
// Creación de instancia

var nombre = new String("Yolanda");
console.log(nombre.includes("Y"));
console.log(nombre.includes("y"));
console.log(nombre.includes("la"));
console.log(nombre.includes("Y", 1));
console.log();

// startsWith(texto, inicio), endsWith(texto, longitud)
// Creación de una instancia

nombre = new String("Yolanda");
console.log(nombre.startsWith("Y"));
console.log(nombre.startsWith("y"));
console.log(nombre.startsWith("Y", 1));
console.log();

// Instancia como valor literal

console.log("Yolanda".endsWith("a"));
console.log("Yolanda".endsWith("A"));
console.log("Yolanda".endsWith("a", 6));
console.log();

// concat(cadena1, cadena2, ..., cadenaN)
// Creación de una instancia

var saludo = new String("Hola");
console.log(saludo.concat("Yolanda"));
console.log(saludo.concat(" ", "Yolanda"));
console.log(saludo.concat(" ", "Yolanda", "!"));
console.log();

// substring(inicio, fin), slice(inicio, fin)
// Creación de una instancia

var nombre = new String("Yolanda");
console.log(nombre.substring(0));
console.log(nombre.substring(0, 2));
console.log();

// Instancia como valor literal

console.log("Yolanda".slice(0));
console.log("Yolanda".slice(0, 2));
console.log("Yolanda".slice(0, -1));
console.log();

// repeat(cantidad)
// Creación de una instancia

var risa = new String("ja");
console.log(risa.repeat());
console.log(risa.repeat(1));
console.log(risa.repeat(3));
console.log();

// Instancia como valor literal

console.log("je".repeat(1));
console.log("je".repeat(3));
console.log();

// padStart(longitud, relleno), padEnd(longitud, relleno)
// Creación de una instancia

var abecedario = new String("def");
console.log(abecedario.padStart(2));
console.log(abecedario.padStart(6));
console.log(abecedario.padStart(6, "abc"));
console.log(abecedario.padStart(6, "abcABC"));
console.log(abecedario.padStart(9, "abc"));
console.log();

// Instancia como valor

console.log("abc".padEnd(2));
console.log("abc".padEnd(6));
console.log("abc".padEnd(6, "def"));
console.log("abc".padEnd(6, "defDEF"));
console.log("abc".padEnd(9, "def"));
console.log();

// split(separador, limite)
// Creación de una instancia

var saludo = new String("Buenos días Alberto");
console.log(saludo.split(" "));
console.log(saludo.split("y"));
console.log(saludo.split("a"));
console.log(saludo.split(" ", 2));
console.log();

// replace(busqueda, reemplazo)
// Creación de una instancia
var palabra = new String("Restar");
// Declaración de variable
var resultado = "";
// Declaración de función
function enMayusculas(cadena) {
    return cadena.toUpperCase();
}

// Reemplazo de cadenas
resultado = palabra.replace("z", "Z");
console.log(resultado);
resultado = palabra.replace("r", "n");
console.log(resultado);
resultado = palabra.replace("ar", "o");
console.log(resultado);
resultado = palabra.replace("R", "Enc");
console.log(resultado);
resultado = palabra.replace("a", cadena => cadena.toUpperCase());
console.log(resultado);
resultado = palabra.replace("a", enMayusculas);
console.log(resultado);
console.log();

// Encadenar diferentes métodos
var saludo = new String("Hola");
// Uso de varios métodos String
var final = saludo.concat(" ", "Nico", "!").toUpperCase().repeat(2);
console.log(final);
console.log();

// Creación de una instancia
var nombre = new String("Yolanda");
// Uso correcto de varion métodos de objetos
console.log(nombre.length.toFixed(2));
console.log(nombre.indexOf("o").toFixed(1));
// Uso incorrecto de varios métodos de objetos
// console.log(nombre.length.concat(".00")); // length es un número, no un string
// console.log(nombre.indexOf("o").toFixed(1)); // indexOf devuelve un número, no un string
console.log();
// Varios métodos seguidos
// Creación de una instancia
var nombre = new String("Yolanda");

var posicion = nombre
    .substr(0, 3)
    .toUpperCase()
    .indexOf("O");

console.log(posicion);