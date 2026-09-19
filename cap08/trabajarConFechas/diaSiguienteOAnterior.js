// Declaración de funciones
function pasarDiaSiguiente(fecha) {
    const dia = fecha.getDate();
    fecha.setDate(dia + 1);
}

function pasarDiaAnterior(fecha) {
    const dia = fecha.getDate();
    fecha.setDate(dia - 1);
}

// Definimos fecha
var finDeMes = new Date(2015, 8, 30);
// Mostramos fecha de mañana
pasarDiaSiguiente(finDeMes);
console.log(finDeMes.toDateString());
// Definimos fecha
var finDeAnio = new Date(2015, 11, 31);
// Mostramos la fecha de mañana
pasarDiaSiguiente(finDeAnio);
console.log(finDeAnio.toDateString());
// Definimos la fecha
var principioDeMes = new Date(2015, 8, 1);
// Mostramos la fecha de ayer
pasarDiaAnterior(principioDeMes);
console.log(principioDeMes.toDateString());