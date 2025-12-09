/**
 * Ejemplo: Factorial
 *
 * El factorial de un número n (n!) es el producto de todos los enteros positivos desde 1 hasta n.
 * Fórmula: n! = n * (n-1)!
 * Caso Base: 0! = 1
 */

export function factorial(n: number): number {
  // Validación: El factorial no está definido para números negativos
  if (n < 0)
    throw new Error("El factorial no está definido para números negativos");

  // Caso Base
  if (n === 0) {
    return 1;
  }

  // Llamada Recursiva
  return n * factorial(n - 1);
}

// Ejemplo de uso
console.log("Factorial de 5:", factorial(5)); // 120
console.log("Factorial de 0:", factorial(0)); // 1
