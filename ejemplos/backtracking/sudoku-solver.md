# Sudoku Solver

El algoritmo resuelve un tablero de Sudoku de 9x9 rellenando las celdas vacías. Utiliza **Backtracking** para probar números del 1 al 9 y retrocede si llega a un estado inválido.

## Lógica del Algoritmo

1. Buscar una celda vacía.
2. Intentar colocar un número (1-9).
3. Verificar si es válido (no existe en fila, columna o subcuadrícula 3x3).
4. Si es válido, colocarlo y llamar recursivamente para la siguiente celda.
5. Si la llamada recursiva falla (devuelve false), borrar el número (backtrack) y probar el siguiente.

## Diagrama de Flujo Simplificado

```mermaid
graph TD
    Start(["Inicio"]) --> Find{"¿Hay celda vacía?"}
    Find -- No --> Solved(["¡Solución Encontrada!"])
    Find -- Sí --> TryLoop["Probar nums 1..9"]

    TryLoop --> Valid{"¿Es válido?"}
    Valid -- No --> NextNum["Siguiente num"]
    NextNum --> TryLoop

    Valid -- Sí --> Place["Colocar Número"]
    Place --> Recurse["Llamada Recursiva"]

    Recurse -- Éxito --> ReturnTrue(["Retornar True"])
    Recurse -- Fallo --> Backtrack["Borrar Número (Backtrack)"]
    Backtrack --> NextNum

    NextNum -- Fin nums --> ReturnFalse(["Retornar False"])

    style Solved fill:#9f9,stroke:#333
    style ReturnTrue fill:#9f9,stroke:#333
    style ReturnFalse fill:#f99,stroke:#333
    style Backtrack fill:#ff9,stroke:#333
```

## Código Clave

```typescript
if (board[row][col] === ".") {
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num.toString())) {
      board[row][col] = num.toString(); // Colocar

      if (solveSudoku(board)) return true; // Si lleva a solución

      board[row][col] = "."; // Backtrack
    }
  }
  return false; // Sin solución por este camino
}
```
