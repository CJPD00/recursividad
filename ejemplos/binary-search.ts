/**
 * Ejemplo: Búsqueda Binaria
 *
 * Algoritmo eficiente para encontrar un elemento en un array ORDENADO.
 * Divide el array a la mitad en cada paso.
 * Complejidad: O(log n)
 */

export function binarySearch(
  arr: number[],
  target: number,
  inicio: number = 0,
  fin: number = arr.length - 1
): number {
  // Caso Base: El rango de búsqueda es inválido (no encontrado)
  if (inicio > fin) {
    return -1;
  }

  // Calcular punto medio
  const medio = Math.floor((inicio + fin) / 2);

  // Caso Base: Encontrado
  if (arr[medio] === target) {
    return medio;
  }

  // Recursión
  if (arr[medio] > target) {
    // Buscar en la mitad izquierda
    return binarySearch(arr, target, inicio, medio - 1);
  } else {
    // Buscar en la mitad derecha
    return binarySearch(arr, target, medio + 1, fin);
  }
}

// Ejemplo de uso
const ordenados = [1, 3, 5, 7, 9, 11, 13, 15];
const buscar = 7;
const index = binarySearch(ordenados, buscar);

console.log(`Array: [${ordenados}]`);
console.log(`Buscando ${buscar}... Encontrado en índice: ${index}`); // 3
