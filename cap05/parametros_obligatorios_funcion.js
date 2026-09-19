function sumar(numero1, numero2) {
    if (typeof numero2 == "undefined") {
        console.log("Falta un parámetro");
    } else {
        var resultado = numero1 + numero2;
        console.log("El resultado es: " + resultado);
    }
}

sumar(2, 5);
sumar(2);
sumar();