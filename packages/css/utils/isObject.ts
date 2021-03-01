export function isObject(valueToCheck: any): valueToCheck is Object {
  return Object.prototype.toString.call(valueToCheck) === "[object Object]";
}
