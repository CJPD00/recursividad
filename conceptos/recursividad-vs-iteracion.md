# Recursividad vs Iteración

Cualquier problema recursivo puede resolverse iterativamente (con bucles) y viceversa. La elección depende de la legibilidad y el rendimiento.

## Comparación

| Característica  | Recursividad                                     | Iteración                                 |
| :-------------- | :----------------------------------------------- | :---------------------------------------- |
| **Código**      | Generalmente más corto y limpio.                 | Puede ser más largo y complejo.           |
| **Memoria**     | Usa más memoria (pila de llamadas).              | Usa menos memoria (heap/stack constante). |
| **Rendimiento** | Puede ser más lenta por el overhead de llamadas. | Generalmente más rápida.                  |
| **Riesgo**      | Stack Overflow si no hay caso base.              | Bucles infinitos si la condición falla.   |

## ¿Cuándo usar cuál?

- **Usa Recursividad** cuando trabajes con estructuras jerárquicas (árboles, grafos, sistemas de archivos) o problemas de "divide y vencerás".
- **Usa Iteración** cuando el rendimiento sea crítico o la profundidad de la recursión sea muy grande.

## Ejemplo: Suma de 1 a N

### Iterativo

```typescript
function sumaIterativa(n: number): number {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}
```

### Recursivo

```typescript
function sumaRecursiva(n: number): number {
  if (n === 0) return 0;
  return n + sumaRecursiva(n - 1);
}
```
