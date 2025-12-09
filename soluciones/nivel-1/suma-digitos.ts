export function sumaDigitos(n: number): number {
  if (n < 10) return n;
  return (n % 10) + sumaDigitos(Math.floor(n / 10));
}
