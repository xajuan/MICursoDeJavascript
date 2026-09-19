try {
    var unidades = 1;
    if (unidades > 3) {
        throw "El límite de unidades es de 4";
    } else if (unidades < 2) {
        throw "El mínimo de unidades es 2";
    }
} catch (excepcion) {
    unidades = 0;
    console.log(`No se ha finalizado la compra: ${excepcion}`);
}
console.log(`Ha comprado ${unidades} unidades`);