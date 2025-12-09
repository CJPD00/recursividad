export function potencia(base: number, exponente: number): number {
  if (exponente === 0) return 1;
  return base * potencia(base, exponente - 1);
}
