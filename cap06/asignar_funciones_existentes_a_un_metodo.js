// Definición de función
function arrancarCoche() {
    console.log("brummmm");
}

// Objeto definido con llaves
var unCoche = {
    arrancar: arrancarCoche
};

// Objeto definido con función
function MiCoche() {
    // Definición de métodos
    this.arrancar = arrancarCoche;
}

// Llamada a los métodos
unCoche.arrancar();
var otroCoche = new MiCoche();
otroCoche.arrancar();

// Con parámetros
// Definición de función con parámetros
function acelerarCoche(velocidad) {
    console.log("acelerando hasta " + velocidad + " km/h");
}

// Objeto definido con llaves
var unCoche2 = {
    acelerar: acelerarCoche
};

// Objeto definido con función
function MiCoche2() {
    // Definición de métodos
    this.acelerar = acelerarCoche;
}

// Llamada a los métodos con parámetros
unCoche2.acelerar(120);
var otroCoche2 = new MiCoche2();
otroCoche2.acelerar(150);