function MiCoche(valorMarca, valorModelo, valorColor) {
    // Definición de propiedades
    this.marca = valorMarca;
    this.modelo = valorModelo;
    this.color = valorColor;    
}
// Definimos instancias
var coche1 = new MiCoche("Fiat", "Punto", "Rojo");
var coche2 = new MiCoche("Honda", "Civic", "Azul");
var coche3 = new MiCoche("Hyundai", "i30", "Blanco");
console.log(coche1.marca);
console.log(coche2.marca);
console.log(coche3.marca);