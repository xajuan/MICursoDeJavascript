// Definición de función
function arrancarCoche() {
    console.log("brummm");
    return "arrancado";
}

// Objeto definido con function
function MiCoche() {
    // Definición correcta de métodos
    this.arrancarBien = arrancarCoche;
    // Definición incorrecta de métodos (error de paréntesis)
    this.arrancarMal = arrancarCoche();     // Se muestra brummmm
}

var unCoche = new MiCoche;
console.log(typeof unCoche.arrancarBien); // function
console.log(typeof unCoche.arrancarMal);  // string
unCoche.arrancarMal(); // Error: unCoche.arrancarMal is not a function