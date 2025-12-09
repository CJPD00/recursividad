export function mcd(a: number, b: number): number {
  if (b === 0) return a;
  return mcd(b, a % b);
}
