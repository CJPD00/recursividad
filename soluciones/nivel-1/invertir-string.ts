export function invertirString(str: string): string {
  if (str === "") return "";
  return invertirString(str.substring(1)) + str.charAt(0);
}
