// Objeto definido con llaves
var coche1 = {
    marca: "Fiat"
};
// Objeto definido con function
function MiCoche(valorMarca) {
    // Definición de la propiedad
    this.marca = valorMarca;
}
var coche2 = new MiCoche("Fiat");
console.log("marca" in coche1); // true
console.log("marca" in coche2); // true
console.log("marca" in MiCoche); // false