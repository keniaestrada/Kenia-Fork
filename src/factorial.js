function factorial(n) {
    // Manejo de caso extremo: números negativos
    if (n < 0) {
        throw new Error("No se puede calcular el factorial de un número negativo.");
    }
    // Manejo de caso extremo: números no enteros
    if (!Number.isInteger(n)) {
        throw new Error("El número debe ser un entero.");
    }
    // Caso base: factorial de 0 es 1
    if (n === 0) {
        return 1;
    }
    // Caso recursivo
    return n * factorial(n - 1);
}

module.exports = {factorial};
