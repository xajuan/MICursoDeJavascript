// Declaración de variable
var mensaje;
// Objeto defido con function
function MiCoche(marca, modelo, color) {
    // Definición de las propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.arrancar = function() {
        console.log("brummmmm");
    }
}
// Declaración de la instancia
var unCoche = new MiCoche("Fiat", "Punto", "Rojo");
// Inicialización de la variable
mensaje = 'Contenido de "unCoche": \n';
// Sentencia for in para recorrer las propiedades del objeto
for (const miPropiedad in unCoche) {
    mensaje += `\t* ${miPropiedad}\n`;
}
// Mostramos las propiedades del objeto
console.log(mensaje);