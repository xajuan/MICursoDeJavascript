// Uso del método 'isInteger'
console.log(Number.isInteger(0));
console.log(Number.isInteger(5));
console.log(Number.isInteger(1.45));
console.log(Number.isInteger(""));
console.log(Number.isInteger("5"));
console.log();

// Uso del método 'isNaN'
console.log(Number.isNaN(0));
console.log(Number.isNaN(""));
console.log(Number.isNaN("hola"));
console.log(Number.isNaN("NaN"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));
console.log();

// Uso del método 'isFinite'
console.log(Number.isFinite(0));
console.log(Number.isFinite(1.45));
console.log(Number.isFinite(""));
console.log(Number.isFinite(Infinity));
console.log();

// Uso del método 'parseInt'
console.log(Number.parseInt("0"));
console.log(Number.parseInt("1.45"));
console.log(Number.parseInt(""));
console.log(Number.parseInt("hola"));
console.log();

// Uso del método 'parseFloat'
console.log(Number.parseFloat("0"));
console.log(Number.parseFloat("1.45"));
console.log(Number.parseFloat(""));
console.log(Number.parseFloat("hola"));
