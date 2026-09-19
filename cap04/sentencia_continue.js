var x = 0;

// Sentencia while
while (x < 10) {
    x++
    if (x == 5) {
        continue;
    }
    console.log(`x vale ${x}`);
}

// Sentencia for
for (x = 1; x <= 10; x++) {
    if (x == 5) {
        continue;
    }
    console.log(`x vale ${x}`);
}
