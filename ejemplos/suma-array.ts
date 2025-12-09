/**
 * Ejemplo: Suma de un Array
 *
 * Sumar todos los elementos de un array de forma recursiva.
 * Idea: La suma es el primer elemento + la suma del resto del array.
 */

export function sumaArray(arr: number[]): number {
  // Caso Base: Array vacío
  if (arr.length === 0) {
    return 0;
  }

  // Desestructuración: head (primero) y tail (resto)
  const [head, ...tail] = arr;

  // Llamada Recursiva
  return head + sumaArray(tail);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(`Suma de [${numeros}]:`, sumaArray(numeros)); // 15
