# Búsqueda Binaria (Binary Search)

La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada. Funciona dividiendo repetidamente el espacio de búsqueda a la mitad.

## Visualización del Proceso

Supongamos que buscamos el número **7** en el array `[1, 3, 5, 7, 9, 11, 13, 15]`.

```mermaid
graph TD
    subgraph Paso1 ["Paso 1: Array Completo"]
        A1["1, 3, 5, 7, 9, 11, 13, 15"]
        style A1 fill:#f9f,stroke:#333,stroke-width:2px
        Note1["Inicio: 0, Fin: 7, Medio: 3 (Valor: 7)"]
    end

    subgraph Paso2 ["Comparación"]
        C1{"¿Es 7 == 7?"}
    end

    Paso1 --> C1
    C1 -- "Sí" --> Found["¡Encontrado en índice 3!"]

    style Found fill:#9f9,stroke:#333,stroke-width:4px
```

### Otro caso: Buscando el 13

Si buscáramos el **13**:

```mermaid
graph TD
    subgraph P1 ["Llamada 1"]
        Arr1["1, 3, 5, 7, 9, 11, 13, 15"]
        Info1["Inicio: 0, Fin: 7, Medio: 3 (Valor: 7)"]
        Check1{"7 < 13?"}
    end

    subgraph P2 ["Llamada 2: Mitad Derecha"]
        Arr2["9, 11, 13, 15"]
        Info2["Inicio: 4, Fin: 7, Medio: 5 (Valor: 11)"]
        Check2{"11 < 13?"}
    end

    subgraph P3 ["Llamada 3: Mitad Derecha"]
        Arr3["13, 15"]
        Info3["Inicio: 6, Fin: 7, Medio: 6 (Valor: 13)"]
        Check3{"13 == 13?"}
    end

    P1 -->|"Sí, buscar derecha"| P2
    P2 -->|"Sí, buscar derecha"| P3
    P3 -->|"Encontrado"| Fin["Retorna índice 6"]

    style Fin fill:#9f9
```

## Código

```typescript
export function binarySearch(
  arr: number[],
  target: number,
  inicio: number = 0,
  fin: number = arr.length - 1
): number {
  if (inicio > fin) return -1;
  const medio = Math.floor((inicio + fin) / 2);
  if (arr[medio] === target) return medio;
  if (arr[medio] > target) return binarySearch(arr, target, inicio, medio - 1);
  return binarySearch(arr, target, medio + 1, fin);
}
```
