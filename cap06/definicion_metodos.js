// Objeto definido con llaves
var unCoche = {
    arrancar: function() {
        console.log("brummm");
    }
};

// Objetto definido con function
function MiCoche() {
    // Definición de métodos
    this.arrancar = function() {
        console.log("brummmm");
    }
}
console.log(unCoche.arrancar());
var otroCoche = new MiCoche();
console.log(otroCoche.arrancar());