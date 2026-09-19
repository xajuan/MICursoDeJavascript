// Objeto definido con llaves
var unCoche = {
    acelerar: function(velocidad) {
        console.log("acelerando hasta " + velocidad + " km/h");
    }
};
// Uso del método
unCoche.acelerar(120);

// Objeto definido con function
function MiCoche() {
    // Definición de métodos
    this.acelerar = function(velocidad) {
        console.log("acelerando hasta " + velocidad + " km/h");
    }
}
var otroCoche = new MiCoche();
otroCoche.acelerar(150);