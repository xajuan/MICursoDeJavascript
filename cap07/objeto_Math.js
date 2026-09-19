// Métodos de objeto
// abs(numero): Nos devuelve el valor absoluto del número
// Uso del método
console.log("abs(numero);")
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.abs(-5.9));
console.log();

// trunc(numero): Nos devuelve la parte entera de un número, eliminando los decimales
// Uso del método
console.log("trunc(numero)");
console.log(Math.trunc(5));
console.log(Math.trunc(5.9));
console.log(Math.trunc(-5.9));
console.log();

// round(numero): Nos devuelve el número redondeado al entero más cercano
// Uso del método
console.log("round(numero)");
console.log(Math.round(5));
console.log(Math.round(5.9));
console.log(Math.round(5.1));
console.log(Math.round(-5.9));
console.log(Math.round(-5.1));
console.log();

// random(): Nos devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive)
// Uso del método
console.log("random()");
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log();

// sign(numero): Nos devuelve el signo de un número, indicando si es positivo, negativo o cero
// Uso del método
console.log("sign(numero)");
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log();

// ceil(numero): Nos devuelve el número redondeado hacia arriba al entero más cercano
// Uso del método
console.log("ceil(numero)");
console.log(Math.ceil(5));
console.log(Math.ceil(5.1));
console.log(Math.ceil(5.9));
console.log(Math.ceil(-5.1));
console.log(Math.ceil(-5.9));
console.log();

// floor(numero): Nos devuelve el número redondeado hacia abajo al entero más cercano
// Uso del método
console.log("floor(numero)");
console.log(Math.floor(5));
console.log(Math.floor(5.1));
console.log(Math.floor(5.9));
console.log(Math.floor(-5.1));
console.log(Math.floor(-5.9));
console.log();

// min(...numeros): Nos devuelve el número más pequeño de un conjunto de números
// Uso del método
console.log("min(...numeros)");
console.log(Math.min(5, 3, 8, 1));
console.log(Math.min(-5, -3, -8, -1));
console.log();

// max(...numeros): Nos devuelve el número más grande de un conjunto de números
// Uso del método
console.log("max(...numeros)");
console.log(Math.max(5, 3, 8, 1));
console.log(Math.max(-5, -3, -8, -1));
console.log();

// pow(base, exponente): Nos devuelve la base elevada al exponente
// Uso del método
console.log("pow(base, exponente)");
console.log(Math.pow(2, 3)); // 2 elevado a la 3
console.log(Math.pow(5, 2)); // 5 elevado a la 2
console.log(Math.pow(10, -1)); // 10 elevado a la -1
console.log();

// sqrt(numero): Nos devuelve la raíz cuadrada de un número
// Uso del método
console.log("sqrt(numero)");
console.log(Math.sqrt(16)); // Raíz cuadrada de 16
console.log(Math.sqrt(25)); // Raíz cuadrada de 25
console.log(Math.sqrt(2)); // Raíz cuadrada de 2
console.log(Math.sqrt(-9)); // Raíz cuadrada de un número negativo (NaN)
console.log();

// cbrt(numero): Nos devuelve la raíz cúbica de un número
// Uso del método
console.log("cbrt(numero)");
console.log(Math.cbrt(27)); // Raíz cúbica de 27
console.log(Math.cbrt(8)); // Raíz cúbica de 8
console.log(Math.cbrt(2)); // Raíz cúbica de 2
console.log(Math.cbrt(-8)); // Raíz cúbica de un número negativo (-2)

// exp(exponente): Nos devuelve el resultado de elevar el número e (base de los logaritmos naturales) al exponente dado
// Uso del método
console.log("exp(exponente)");
console.log(Math.exp(2)); // e elevado a la 2
console.log(Math.exp(0)); // e elevado a la 0
console.log(Math.exp(-2)); // e elevado a la -2
console.log();

// expm1(exponente): Nos devuelve el resultado de elevar el número e al exponente dado y restar 1, es decir, exp(exponente) - 1
// Uso del método
console.log("expm1(exponente)");
console.log(Math.expm1(2)); // e elevado a la 2 menos 1
console.log(Math.expm1(0)); // e elevado a la 0 menos 1
console.log(Math.expm1(-2)); // e elevado a la -2 menos 1
console.log();

// log(numero): Nos devuelve el logaritmo natural (base e) de un número
// log2(numero): Nos devuelve el logaritmo en base 2 de un número
// log10(numero): Nos devuelve el logaritmo en base 10 de un número
// Uso de los métodos
console.log("log(numero)");
console.log(Math.log(1));
console.log(Math.log(Math.E));
console.log(Math.log(2));
console.log(Math.log(0)); // Logaritmo de 0 (negativo infinito)
console.log(Math.log(-2)); // Logaritmo de un número negativo (NaN)
console.log();
console.log("log2(numero)");
console.log(Math.log2(1));
console.log(Math.log2(2));
console.log(Math.log2(10));
console.log(Math.log2(0));
console.log(Math.log2(-2)); // Logaritmo de un número negativo (NaN)
console.log();
console.log("log10(numero)");
console.log(Math.log10(1));
console.log(Math.log10(2));
console.log(Math.log10(10));
console.log(Math.log10(0));
console.log(Math.log10(-2)); // Logaritmo de un número negativo (NaN)
console.log();

// log1p(numero): Nos devuelve el resultado de calcular el logaritmo natural de (1 + numero), es decir, log(1 + numero)
// Uso del método
console.log("log1p(numero)");
console.log(Math.log1p(1)); // log(1 + 1)
console.log(Math.log1p(Math.E)); // log(1 + e)
console.log(Math.log1p(0)); // log(1 + 0) (log(1))
console.log(Math.log1p(-1)); // log(1 - 1) (negativo infinito)
console.log(Math.log1p(-2)); // log(1 - 2) (NaN)
console.log();

// sin(angulo): Nos devuelve el seno de un ángulo dado en radianes
// cos(angulo): Nos devuelve el coseno de un ángulo dado en radianes
// tan(angulo): Nos devuelve la tangente de un ángulo dado en radianes
// Uso de los métodos
console.log("sin(angulo)");
console.log(Math.sin(0));
console.log(Math.sin(1));
console.log(Math.sin(Math.PI / 2));
console.log();
console.log("cos(angulo)");
console.log(Math.cos(0));
console.log(Math.cos(1));
console.log(Math.cos(Math.PI / 2));
console.log(Math.round(Math.cos(Math.PI / 2)));
console.log();
console.log("tan(angulo)");
console.log(Math.tan(0));
console.log(Math.tan(1));
console.log(Math.tan(Math.PI / 4));
console.log(Math.tan(Math.PI / 2)); // Tangente de 90 grados (infinito)
console.log(Math.round(Math.PI / 4)); // Tangente de 45 grados (1)
console.log();

// asin(numero): Nos devuelve el arco seno de un número, es decir, el ángulo cuyo seno es el número dado
// acos(numero): Nos devuelve el arco coseno de un número, es decir, el ángulo cuyo coseno es el número dado
// atan(numero): Nos devuelve el arco tangente de un número, es decir, el ángulo cuya tangente es el número dado
// Uso de los métodos
console.log("asin(numero)");
console.log(Math.asin(0));
console.log(Math.asin(0.8414709848078965)); // asin(1) (90 grados en radianes)
console.log(Math.asin(1)); // asin(1) (90 grados en radianes)
console.log();
console.log("acos(numero)");
console.log(Math.acos(1));
console.log(Math.acos(0.5403023058681398));
console.log(Math.acos(0)); // acos(0) (90 grados en radianes)
console.log();
console.log("atan(numero)");
console.log(Math.atan(0));
console.log(Math.atan(1.5574077246549023)); // atan(1) (45 grados en radianes)
console.log(Math.atan(1)); // atan(1) (45 grados en radianes)
console.log();

// hypot(...numeros): Nos devuelve la raíz cuadrada de la suma de los cuadrados de los números dados, es decir, sqrt(x1^2 + x2^2 + ... + xn^2)
// Uso del método
console.log("hypot(...numeros)");
console.log(Math.hypot(3, 4)); // Raíz cuadrada de (3^2 + 4^2) (5)
console.log(Math.hypot(2, 3)); // Raíz cuadrada de (2^2 + 3^2) (3.605551275463989)
console.log(Math.hypot(2, 3, 4)); // Raíz cuadrada de (2^2 + 3^2 + 4^2) (5.385164807134504)