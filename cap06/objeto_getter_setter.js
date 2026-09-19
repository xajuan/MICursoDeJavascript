// Objeto con getter y setter
var unCoche = {
    get marca() {
        return `Este coche es: ${this._marca}`;
    },
    set marca(valorMarca) {
        this._marca = `--- ${valorMarca} ---`;
    }
};

// Utilizamos el setter
unCoche.marca = "Fiat";

// Utilizamos el getter
console.log(unCoche.marca); // Imprime: Este coche es: --- Fiat ---