# Pila de Llamadas (Call Stack)

La **pila de llamadas** es una estructura de datos que el motor de JavaScript (y otros lenguajes) usa para gestionar las llamadas a funciones.

## ¿Cómo funciona?

1. Cuando invocas una función, se añade (push) a la parte superior de la pila.
2. Cuando la función termina, se elimina (pop) de la pila.
3. Si una función llama a otra, la nueva se coloca encima de la anterior.

## Visualización

Imagina una pila de platos. Solo puedes poner un plato encima del último y solo puedes quitar el de arriba.

## Diagrama en Recursividad

```mermaid
stateDiagram-v2
    [*] --> Main
    Main --> Factorial(3)
    Factorial(3) --> Factorial(2)
    Factorial(2) --> Factorial(1)
    Factorial(1) --> Factorial(0)

    state "Pila Creciendo" as Growing {
        Factorial(0)
        Factorial(1)
        Factorial(2)
        Factorial(3)
    }

    Factorial(0) --> Return1
    Return1 --> Factorial(1)
    Factorial(1) --> Return1_1
    Return1_1 --> Factorial(2)
    Factorial(2) --> Return2
    Return2 --> Factorial(3)
    Factorial(3) --> Return6
    Return6 --> [*]
```

## Importancia

Entender la pila es crucial para entender cómo la recursividad "recuerda" el estado anterior cuando regresa de una llamada recursiva.
