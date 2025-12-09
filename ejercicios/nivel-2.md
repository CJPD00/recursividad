# Ejercicios Nivel 2: Divide y Vencerás

Aquí practicaremos cómo dividir un problema en subproblemas más pequeños.

## 1. Palíndromo

Verifica si un string es un palíndromo (se lee igual al revés).
Ejemplo: `"anita lava la tina"` (ignorando espacios) -> `true`.
_Caso Base: String vacío o de 1 letra es palíndromo._

## 2. Máximo de un Array

Encuentra el número más grande en un array sin usar bucles ni `Math.max` con spread.
_Pista: El máximo es el mayor entre el primer elemento y el máximo del resto del array._

## 3. Aplanar Array (Flatten)

Dado un array que puede contener otros arrays anidados (ej: `[1, [2, 3], [4, [5]]]`), devuelve un array plano (`[1, 2, 3, 4, 5]`).

## 4. MCD (Máximo Común Divisor)

Implementa el algoritmo de Euclides para encontrar el MCD de dos números.
`MCD(a, b) = MCD(b, a % b)`
