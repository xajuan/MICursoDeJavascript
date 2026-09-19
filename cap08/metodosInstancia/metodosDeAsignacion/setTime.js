// Creación de instasncia
fecha1 = new Date();    // fecha actual
fecha2 = new Date("Apr 17 2008 20:45:34");    // fecha específica
// Uso del método añade un segundo
fecha1.setTime(1000);
// Muestra la fecha actualizada
console.log(fecha1.toString());    // muestra: 01 Jan 1970 00:00:01 GMT+0000 (Coordinated Universal Time)
// Uso del método copia flecha
fecha2.setTime(fecha2.getTime());