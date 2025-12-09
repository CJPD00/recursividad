/**
 * Ejemplo: N-Reinas (Backtracking)
 *
 * El problema de las N-Reinas consiste en colocar N reinas en un tablero de ajedrez NxN
 * de tal manera que ninguna reina ataque a otra.
 */

export function solveNQueens(n: number): string[][] {
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));
  const solutions: string[][] = [];

  function isSafe(row: number, col: number): boolean {
    // Verificar columna hacia arriba
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Verificar diagonal superior izquierda
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Verificar diagonal superior derecha
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row: number) {
    // Caso Base: Todas las reinas colocadas
    if (row === n) {
      // Guardar solución (copia del tablero)
      solutions.push(board.map((r) => r.join("")));
      return;
    }

    // Intentar colocar reina en cada columna de la fila actual
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q"; // Colocar
        backtrack(row + 1); // Siguiente fila
        board[row][col] = "."; // Backtrack (quitar)
      }
    }
  }

  backtrack(0);
  return solutions;
}

// Ejemplo de uso (N=4)
const soluciones = solveNQueens(4);
console.log(`Soluciones para 4 reinas: ${soluciones.length}`);
soluciones.forEach((sol, i) => {
  console.log(`Solución ${i + 1}:`);
  console.log(sol.join("\n"));
  console.log("---");
});
