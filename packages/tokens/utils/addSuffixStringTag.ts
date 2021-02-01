/**
 * adds a suffix tag onto a string separated by a hyphen
 * @param prefix
 * @param suffix
 * @return string - new string with -{suffix} appended
 */
export function addSuffixStringTag(prefix: string, suffix: string): string {
  return `${prefix}-${suffix}`;
}
