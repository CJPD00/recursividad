# Factorial

El factorial de un número entero no negativo $n$, denotado como $n!$, es el producto de todos los enteros positivos menores o iguales a $n$.

Definición recursiva:

- **Caso Base**: $0! = 1$
- **Caso Recursivo**: $n! = n \times (n-1)!$

## Visualización del Proceso (Factorial de 4)

Calculando `factorial(4)`:

```mermaid
graph TD
    subgraph Llamadas ["Fase de Llamadas (Desapilado)"]
        F4["factorial(4)"] -->|Llama a| F3["factorial(3)"]
        F3 -->|Llama a| F2["factorial(2)"]
        F2 -->|Llama a| F1["factorial(1)"]
        F1 -->|Llama a| F0["factorial(0)"]
    end

    subgraph Retornos ["Fase de Retorno (Apilado)"]
        R0["Retorna 1"] -->|"1 * 1"| R1["Retorna 1"]
        R1 -->|"2 * 1"| R2["Retorna 2"]
        R2 -->|"3 * 2"| R3["Retorna 6"]
        R3 -->|"4 * 6"| R4["Retorna 24"]
    end

    F0 -.-> R0

    style F0 fill:#f9f,stroke:#333
    style R0 fill:#9f9,stroke:#333
```

## Código

```typescript
export function factorial(n: number): number {
  if (n < 0)
    throw new Error("El factorial no está definido para números negativos");

  // Caso Base
  if (n === 0) {
    return 1;
  }

  // Llamada Recursiva
  return n * factorial(n - 1);
}
```
