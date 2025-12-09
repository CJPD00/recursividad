type NestedArray = (number | NestedArray)[];

export function flatten(arr: NestedArray): number[] {
  let result: number[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
