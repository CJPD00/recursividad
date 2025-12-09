# Recorridos de Árboles Binarios

Un recorrido de árbol es el proceso de visitar cada nodo de una estructura de datos de árbol exactamente una vez.

## Árbol de Ejemplo

Usaremos el siguiente árbol binario para los ejemplos:

```mermaid
graph TD
    1((1)) --> 2((2))
    1 --> 3((3))
    2 --> 4((4))
    2 --> 5((5))
```

## 1. Preorder (Pre-orden)

**Orden**: Raíz → Izquierda → Derecha

1. Visitar **Raíz**.
2. Recorrer subárbol **Izquierdo**.
3. Recorrer subárbol **Derecho**.

```mermaid
graph TD
    subgraph Preorder [Ruta de Visita]
        P1[1. Visita 1] --> P2[2. Visita 2]
        P2 --> P3[3. Visita 4]
        P3 --> P4[4. Visita 5]
        P4 --> P5[5. Visita 3]
    end

    style P1 fill:#f9f
    style P2 fill:#bbf
    style P3 fill:#bfb
    style P4 fill:#bfb
    style P5 fill:#bbf
```

**Resultado**: `[1, 2, 4, 5, 3]`

---

## 2. Inorder (En-orden)

**Orden**: Izquierda → Raíz → Derecha

1. Recorrer subárbol **Izquierdo**.
2. Visitar **Raíz**.
3. Recorrer subárbol **Derecho**.

```mermaid
graph TD
    subgraph Inorder [Ruta de Visita]
        I1[1. Visita 4] --> I2[2. Visita 2]
        I2 --> I3[3. Visita 5]
        I3 --> I4[4. Visita 1]
        I4 --> I5[5. Visita 3]
    end

    style I1 fill:#bfb
    style I2 fill:#bbf
    style I3 fill:#bfb
    style I4 fill:#f9f
    style I5 fill:#bbf
```

**Resultado**: `[4, 2, 5, 1, 3]`

---

## 3. Postorder (Post-orden)

**Orden**: Izquierda → Derecha → Raíz

1. Recorrer subárbol **Izquierdo**.
2. Recorrer subárbol **Derecho**.
3. Visitar **Raíz**.

```mermaid
graph TD
    subgraph Postorder [Ruta de Visita]
        Po1[1. Visita 4] --> Po2[2. Visita 5]
        Po2 --> Po3[3. Visita 2]
        Po3 --> Po4[4. Visita 3]
        Po4 --> Po5[5. Visita 1]
    end

    style Po1 fill:#bfb
    style Po2 fill:#bfb
    style Po3 fill:#bbf
    style Po4 fill:#bbf
    style Po5 fill:#f9f
```

**Resultado**: `[4, 5, 2, 3, 1]`
