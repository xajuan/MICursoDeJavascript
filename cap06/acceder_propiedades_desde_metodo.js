// Definición de función con acceso a propiedades
function mostrarColorCoche() {
    console.log("El color del coche es: " + this.color);
}
// Objeto definido con function
function MiCoche(marca, modelo, color) {
    // Definición de propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    // Función definida en objeto
    this.mostrarMarca = function() {
        console.log("La marca del coche es: " + this.marca);
    };
    // Función existente
    this.mostrarColor = mostrarColorCoche;
}

var UnCoche = new MiCoche("Fiat", "Punto", "Rojo");
UnCoche.mostrarMarca();
UnCoche.mostrarColor();
// Llamada a función sin contexto de objeto
mostrarColorCoche(); // Esto no funcionará correctamente porque 'this' no se refiere a UnCoche