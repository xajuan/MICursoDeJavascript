function calcularEdad(nacimiento) {
    var hoy = new Date();
    // Edad solamente restando años
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    // Comparamos los meses
    if (hoy.getMonth() > nacimiento.getMonth()) {
        // No hacemos nada porque ya es correcta
    } else if (hoy.getMonth() < nacimiento.getMonth()) {
        edad--;
    } else {
        // Comparamos los días
        if (hoy.getDate() < nacimiento.getDate()) {
            edad--;
        }
    }
    return edad;
}

// Definimos la fecha
var nacimiento = new Date(1963, 4, 20); // Recordemos que el mes es 0-indexado
var miEdad = calcularEdad(nacimiento);
// Mostramos la edad
console.log(miEdad);