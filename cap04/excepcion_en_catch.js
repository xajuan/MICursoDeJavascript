// Primer try-catch-finally
try {
    console.log("Primer try");
    // Segundo try-catch-finally
    try {
        console.log("Segundo try");
        var num2 = num1 + 3;
        console.log("num2 vale " + num2);
    } catch (excepcion) {
        console.log("Segundo catch");
        num2 = num3 + 5;
        console.log(`Ha ocurrido una excepción: ${excepcion}`);
    } finally {
        console.log("Segundo finally");
    }
} catch (excepcion) {
    console.log("Primer catch");
    console.log(`Ha ocurrido una excepción: ${excepcion}`);
} finally {
    console.log("Primer finally");
}
console.log("Finalmente fuera");