/**
 * wraps a data string in a root tag exposing all tokens at root level
 * @param data
 */

export function WrapWithRoot(data: string | string[]): string {
  let stringData = data;

  if (!stringData || !stringData.length) {
    return "";
  }

  if (Array.isArray(data)) {
    stringData = data.join(" ");
  }

  return `:root{${stringData}}`;
}
