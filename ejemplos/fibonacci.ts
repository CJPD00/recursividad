/**
 * Ejemplo: Fibonacci
 *
 * La secuencia de Fibonacci es una serie donde cada número es la suma de los dos anteriores.
 * Secuencia: 0, 1, 1, 2, 3, 5, 8, 13...
 * Fórmula: F(n) = F(n-1) + F(n-2)
 * Casos Base: F(0) = 0, F(1) = 1
 */

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("No definido para números negativos");

  // Casos Base
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Llamada Recursiva (doble)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Nota: Esta implementación es ineficiente para n grandes debido a cálculos repetidos.
// Se puede optimizar usando Memoización (ver ejercicios avanzados).

// Ejemplo de uso
console.log("Fibonacci de 6:", fibonacci(6)); // 8
console.log("Fibonacci de 10:", fibonacci(10)); // 55
