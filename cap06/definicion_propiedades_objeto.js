// Utilizando llaves
var unCoche = {
    marca: "Citroen",
    modelo: "C5",
    color: "Azul"
};

console.log(unCoche.marca);

// Utilizando la sentencia "function"
function MiCoche() {
    this.marca = "Citroen";
    this.modelo = "C5";
    this.color = "Azul";
}
// Creamos una instancia
var UnCoche2 = new MiCoche();
console.log(UnCoche2.color);