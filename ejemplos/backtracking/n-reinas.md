# Problema de las N-Reinas (N-Queens)

El objetivo es colocar $N$ reinas en un tablero de ajedrez de $N \times N$ de forma que ninguna reina pueda atacar a otra. Esto significa que no pueden compartir la misma fila, columna o diagonal.

## Visualización del Backtracking (N=4)

El algoritmo intenta colocar una reina fila por fila. Si encuentra un conflicto, retrocede (backtrack) y prueba la siguiente posición.

```mermaid
graph TD
    Root((Inicio)) --> R1_C1(Fila 1, Col 1)

    R1_C1 --> R2_C3(Fila 2, Col 3)
    R2_C3 --> R3_X[Fila 3: Sin lugar seguro]
    R3_X -.->|Backtrack| R2_C3

    R2_C3 -.->|Backtrack| R1_C1
    R1_C1 --> R2_C4(Fila 2, Col 4)

    R2_C4 --> R3_C2(Fila 3, Col 2)
    R3_C2 --> R4_X[Fila 4: Sin lugar seguro]

    style R3_X fill:#f99,stroke:#333
    style R4_X fill:#f99,stroke:#333
    style Root fill:#fff,stroke:#333
```

_Nota: El diagrama muestra solo una rama del árbol de decisión donde ocurren conflictos y retrocesos._

## Solución Válida para N=4

Una de las soluciones encontradas:

| .   | Q   | .   | .   |
| --- | --- | --- | --- |
| .   | .   | .   | Q   |
| Q   | .   | .   | .   |
| .   | .   | Q   | .   |

## Código Principal

```typescript
function backtrack(row: number) {
  // Caso Base: Todas las reinas colocadas
  if (row === n) {
    solutions.push(board.map((r) => r.join("")));
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(row, col)) {
      board[row][col] = "Q"; // Colocar
      backtrack(row + 1); // Avanzar
      board[row][col] = "."; // Backtrack (Quitar)
    }
  }
}
```
