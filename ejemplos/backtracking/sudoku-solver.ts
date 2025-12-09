/**
 * Ejemplo: Sudoku Solver (Backtracking)
 *
 * Resolver un Sudoku 9x9 rellenando las celdas vacías.
 */

export function solveSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // Encontrar celda vacía ('.')
      if (board[row][col] === ".") {
        // Intentar números del 1 al 9
        for (let num = 1; num <= 9; num++) {
          const charNum = num.toString();
          if (isValid(board, row, col, charNum)) {
            board[row][col] = charNum; // Colocar

            if (solveSudoku(board)) {
              return true; // Solución encontrada
            }

            board[row][col] = "."; // Backtrack
          }
        }
        return false; // No se encontró solución para esta celda
      }
    }
  }
  return true; // Tablero completo
}

function isValid(
  board: string[][],
  row: number,
  col: number,
  num: string
): boolean {
  for (let i = 0; i < 9; i++) {
    // Verificar fila
    if (board[row][i] === num) return false;
    // Verificar columna
    if (board[i][col] === num) return false;
    // Verificar sub-cuadrícula 3x3
    const subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const subCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[subRow][subCol] === num) return false;
  }
  return true;
}

// Ejemplo de uso
const sudokuBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log("Resolviendo Sudoku...");
if (solveSudoku(sudokuBoard)) {
  console.log("¡Resuelto!");
  console.log(sudokuBoard.map((row) => row.join(" ")).join("\n"));
} else {
  console.log("No tiene solución.");
}
