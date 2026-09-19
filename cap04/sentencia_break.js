var x = 1;

// Sentencia while
while(x < 10) {
    console.log(`x vale ${x}`);
    if (x == 5) {
        break;
    }
    x++
}
console.log(`valor final while: ${x}`);

// Sentencia for
for (x = 1; x < 10; x++) {
    console.log(`x vale ${x}`);
    if (x == 5) {
        break;
    }
}
console.log(`valor final for: ${x}`);