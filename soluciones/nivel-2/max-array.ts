export function maxArray(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  const maxRest = maxArray(arr.slice(1));
  return arr[0] > maxRest ? arr[0] : maxRest;
}
