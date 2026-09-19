// Declaración de función
function esBisiesto(fecha) {
    const anio = fecha.getFullYear();
    return (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0);
}

var bisiesto = new Date(2020, 11, 21);
var noBisiesto = new Date(2019, 11, 21);

console.log("¿El año " + bisiesto.getFullYear() + " es bisiesto? " + esBisiesto(bisiesto));
console.log("¿El año " + noBisiesto.getFullYear() + " es bisiesto? " + esBisiesto(noBisiesto));