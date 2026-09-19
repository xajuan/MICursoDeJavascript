// var num2 = num1 + 3;
// console.log("num2 vale " + num2);
// error num1 not defined

var num1 = 5;

try {
    var num2 = num1 + 3;
    console.log("num2 vale " + num2);
} catch (excepcion) {
    console.log(`Ha ocurrido una excepción: ${excepcion}`);
} finally {
    console.log("Hemos terminado");
}