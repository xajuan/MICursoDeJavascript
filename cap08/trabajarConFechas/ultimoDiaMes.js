// Declaración de función
function obtenerUltimoDia(fecha) {
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth();
    var ultimoDia = new Date(anio, mes + 1, 0);
    // Obtenemos el último día del mes
    return ultimoDia.getDate();
}

// Definimos fechas
var abril = new Date(2015, 3, 17); // Recordemos que el mes es 0-indexado
var diciembre = new Date(2015, 11, 17);

// Obtenemos el último día de cada mes
var ultimoDiaAbril = obtenerUltimoDia(abril);
var ultimoDiaDiciembre = obtenerUltimoDia(diciembre);

// Mostramos los resultados
console.log("El último día de abril es: " + ultimoDiaAbril);
console.log("El último día de diciembre es: " + ultimoDiaDiciembre);