export function cuentaRegresiva(n: number): void {
  if (n < 1) return;
  console.log(n);
  cuentaRegresiva(n - 1);
}
