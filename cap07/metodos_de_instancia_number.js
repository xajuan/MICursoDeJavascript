// toFixed(decimales)
var numero = new Number(53.27);     // "53" (redondeo)
console.log(numero.toFixed(0));     // "53" (redondeo)
console.log(numero.toFixed(1));     // "53.3" (redondeo)
console.log(numero.toFixed(2));     // "53.27" (redondeo)
console.log(numero.toFixed(3));     // "53.270" (redondeo)
console.log(numero.toFixed(4));     // "53.2700" (redondeo)
console.log();

// Instancia como valor literal
console.log((16.5).toFixed());      // "17" (redondeo)
console.log((16.5).toFixed(0));     // "17" (redondeo)
console.log((16.5).toFixed(1));     // "16.5" (redondeo)
console.log((16.5).toFixed(2));     // "16.50" (redondeo)
console.log((16.5).toFixed(3));     // "16.500" (redondeo)
console.log((16.5).toFixed(4));     // "16.5000" (redondeo)
console.log();

// toExponential(decimales)
var numero = new Number(53.27);
console.log(numero.toExponential());     // "5.327e+1" (notación exponencial)
console.log(numero.toExponential(0));    // "5e+1" (notación exponencial)
console.log(numero.toExponential(1));    // "5.3e+1" (notación exponencial)
console.log(numero.toExponential(2));    // "5.3e+1" (notación exponencial)
console.log(numero.toExponential(3));    // "5.33e+1" (notación exponencial)
console.log(numero.toExponential(4));    // "5.327e+1" (notación exponencial)
console.log();

// Instancia como valor literal
console.log((16.25).toExponential());    // "1.625e+1" (notación exponencial)
console.log((16.25).toExponential(0));   // "2e+1" (notación exponencial)
console.log((16.25).toExponential(1));   // "1.6e+1" (notación exponencial)
console.log((16.25).toExponential(2));   // "1.63e+1" (notación exponencial)
console.log((16.25).toExponential(3));   // "1.625e+1" (notación exponencial)
console.log((16.25).toExponential(4));   // "1.6250e+1" (notación exponencial)
console.log();

// toPrecision(precision)

var numero = new Number(53.27);
console.log(numero.toPrecision());     // "53.27" (precisión total)
console.log(numero.toPrecision(1));    // "5e+1" (precisión total)
console.log(numero.toPrecision(2));    // "53" (precisión total)
console.log(numero.toPrecision(3));    // "53.3" (precisión total)
console.log(numero.toPrecision(4));    // "53.27" (precisión total)
console.log(numero.toPrecision(5));    // "53.270" (precisión total)
console.log();

// Instancia como valor literal
console.log((16.50).toPrecision());   // "16.5" (precisión total)
console.log((16.50).toPrecision(1));  // "2e+1" (precisión total)
console.log((16.50).toPrecision(2));  // "17" (precisión total)
console.log((16.50).toPrecision(3));  // "16.5" (precisión total)
console.log((16.50).toPrecision(4));  // "16.50" (precisión total)
console.log((16.50).toPrecision(5));  // "16.500" (precisión total)
console.log();