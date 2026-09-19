// Declaración de variable
var coche1;
// Objeto definido con functio
function MiCoche(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}
// Declaración de función con un parámetro
function repintar(coche, nuevoColor) {
    // Modificamos la propiedad
    coche.color = nuevoColor;
}
// Creamos la instancia
coche1 = new MiCoche("Fiat", "Punto", "Rojo");
console.log(coche1.color);
// Llamada a función
repintar(coche1, "Amarillo");
console.log(coche1.color);
repintar(coche1, "Negro");
console.log(coche1.color);