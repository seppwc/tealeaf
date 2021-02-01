/**
 * creates a key value string, key being a teal design token and value being corresponding value
 * @param token
 * @param value
 * @returns string - '--tl-token : value;'
 */
export function joinTokenAndValueString(token: string, value: string): string {
  return `${token}:${value};`;
}
