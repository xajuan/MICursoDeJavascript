// Vacío
console.log("Vacío");
// Creación de instancia
fecha = new Date();
// process.env.TZ = 'Europe/Madrid';
console.log(fecha.toString());
console.log();
// Milisegundos
console.log("Milisegundos");
// Creación de instancia
var fecha1 = new Date(1000);
console.log(fecha1.toString());
// Creación de instancia
var fecha2 = new Date(5000);
console.log(fecha2.toString());
console.log();
// Año, mes .....
console.log("Año, Mes, Día, Hora, Minutos, Segundos, Milisegundos");
// Creación de instancia
var fecha1 = new Date(2008, 3);
console.log(fecha1.toString());
// Creación de instancia
var fecha2 = new Date(2008, 3, 17, 20);
console.log(fecha2.toString());
// Creación de instancia
var fecha3 = new Date(2008, 3, 17, 20, 45, 34);
console.log(fecha3.toString());
console.log();
// YYYY-MM-DD
// Solo primer elemento es obligatorio
console.log("YYYY-MM-DD");
// Creación de instancia
var fecha1 = new Date("2008");
console.log(fecha1.toString());
// Creación de instancia
var fecha2 = new Date("2008-4-17");
console.log(fecha2.toString());
console.log();
// YYYY/MM/DD
// Todos los elementos son obligatorios
console.log("YYYY/MM/DD");
// Creación de instancia
var fecha = new Date("2008/04/17");
console.log(fecha.toString());
console.log();
// YYYY/MM/DD hh:mm:ss
console.log("YYYY/MM/DD hh:mm:ss");
var fecha = new Date("2008/04/17 20:45:34");
console.log(fecha.toString());
console.log();
// MMM DD YYYY
console.log("MMM DD YYYY");
// Creación de instancia
var fecha1 = new Date("Apr 17 2008");
console.log(fecha1.toString());
// Creación de instancia
var fecha2 = new Date("17 Apr 2008");
console.log(fecha2.toString());
console.log();
// MMM DD YYYY hh:mm:ss
console.log("MMM DD YYYY hh:mm:ss");
var fecha1 = new Date("Apr 17 2008 20:45:34");
console.log(fecha1.toString());
// Creación de instancia
var fecha2 = new Date("17 Apr 2008 20:45:34");
console.log(fecha2.toString());
console.log();
// YYYY-MM-DDThh:mm:ss.ms±zhzm, YYYY-MM-DDThh:mm:ss.msZ
console.log("YYYY-MM-DDThh:mm:mm.ms±zhzm, YYYY-MM-DDThh:mm:ss.msZ");
// Creación de instancia
var fecha1 = new Date("2008-04-17T20:45:34");
console.log(fecha1.toString());
// Creación de instancia
fecha2 = new Date("2008-04-17T20:45:34+00:00");
console.log(fecha2.toString());
// Creación de instancia
fecha3 = new Date("2008-04-17T20:45:34Z");
console.log(fecha3.toString());
// Creación de instancia
fecha4 = new Date("2008-04-17T20:45:34-01:00");
console.log(fecha4.toString());
console.log();
