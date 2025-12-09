export function esPalindromo(str: string): boolean {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return esPalindromo(str.substring(1, str.length - 1));
}
