/**
 * adds a "--tl-" prefix to string, required for all teal desgin tokens
 * @params value: any - value to prefix (will be converted to string)
 * @returns string - prefixed string
 *
 */
export function addPrefixStringTag(value: any): string {
  return `--tl-${value}`;
}

/**
 * adds a suffix tag onto a string separated by a hyphen
 * @param prefix
 * @param suffix
 * @return string - new string with -{suffix} appended
 */
export function addSuffixStringTag(prefix: string, suffix: string): string {
  return `${prefix}-${suffix}`;
}

/**
 * creates a key value string, key being a teal design token and value being corresponding value
 * @param token
 * @param value
 * @returns string - '--tl-token : value;'
 */
export function joinTokenAndValueString(token: string, value: string): string {
  return `${token}:${value};`;
}
