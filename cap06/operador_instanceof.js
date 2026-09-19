// Objeto definido con llaves
var coche1 = {
    marca: "Fiat",
};
// Objeto definido con function
function MiCoche(valortMarca) {
    // Definición de la propiedad
    this.marca = valortMarca;
}
// Definimos instancias
var coche2 = new MiCoche("Fiat");
console.log(coche1 instanceof MiCoche);
console.log(coche2 instanceof MiCoche);
