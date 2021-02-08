export function isObject(valueToCheck: any): boolean {
  return Object.prototype.toString.call(valueToCheck) === "[object Object]";
}
