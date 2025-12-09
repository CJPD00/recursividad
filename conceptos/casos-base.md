# Casos Base

El **caso base** es la condición que detiene la recursividad. Sin él, la función se llamaría a sí misma infinitamente, provocando un desbordamiento de pila (Stack Overflow).

## ¿Por qué es importante?

Es la "salida" de la función. Define el problema más simple que se puede resolver directamente sin hacer más llamadas recursivas.

## Analogía

Si estás subiendo una escalera, el caso base es llegar al último escalón. Si no te detienes ahí, intentarás subir un escalón que no existe y te caerás.

## Diagrama

```mermaid
sequenceDiagram
    participant Main
    participant Func(3)
    participant Func(2)
    participant Func(1)

    Main->>Func(3): Llamar
    Func(3)->>Func(2): Llamar (n-1)
    Func(2)->>Func(1): Llamar (n-1)
    Note over Func(1): Caso Base Alcanzado
    Func(1)-->>Func(2): Retornar
    Func(2)-->>Func(3): Retornar
    Func(3)-->>Main: Retornar
```

## Ejemplo: Factorial

El factorial de 0 es 1. Este es nuestro caso base.

```typescript
function factorial(n: number): number {
  // Caso Base
  if (n === 0) {
    return 1;
  }

  // Paso Recursivo
  return n * factorial(n - 1);
}
```
