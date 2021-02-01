/**
 * adds a "--tl-" prefix to string, required for all teal desgin tokens
 * @params value: any - value to prefix (will be converted to string)
 * @returns string - prefixed string
 *
 */
export function addPrefixStringTag(value: any): string {
  return `--tl-${value}`;
}
