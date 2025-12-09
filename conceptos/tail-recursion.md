# Tail Recursion (Recursividad de Cola)

La **recursividad de cola** es un caso especial donde la llamada recursiva es la _última_ acción que realiza la función.

## ¿Por qué es especial?

Algunos compiladores (aunque no siempre en JS/TS estándar) pueden optimizar esto para no aumentar la pila de llamadas, reutilizando el mismo marco de pila. Esto se llama TCO (Tail Call Optimization).

## Diferencia Visual

### Recursividad Normal

```typescript
function factorial(n: number): number {
  if (n === 0) return 1;
  // La multiplicación ocurre DESPUÉS de que retorna la llamada recursiva
  return n * factorial(n - 1);
}
```

### Recursividad de Cola

```typescript
function factorialTail(n: number, acumulador: number = 1): number {
  if (n === 0) return acumulador;
  // La llamada recursiva es lo ÚLTIMO que se hace
  return factorialTail(n - 1, n * acumulador);
}
```

En la versión de cola, pasamos el resultado parcial como argumento (`acumulador`), por lo que no necesitamos "recordar" nada para después de la llamada.
