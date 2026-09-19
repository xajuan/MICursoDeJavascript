// Definimos las fechas
var nacimiento = new Date("1963, 5, 20");
var hoy = Date.now();
// Calculamos la diferencia entre fechas
var edadMilisegundos = hoy - nacimiento;
// Convertimos la edad a años, descartamos decimales con parseInt
var edad = parseInt(edadMilisegundos / (365 * 24 * 60 * 60 * 1000));
// Mostramos la edad
console.log(edadMilisegundos);
console.log(edad);