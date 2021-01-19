export function escapeString(str: string) {
  const CHARS_TO_ESCAPE = [":", "/", "@"];
  return str
    .split("")
    .map((char: string) =>
      CHARS_TO_ESCAPE.includes(char) ? `\\${char}` : char
    )
    .join("");
}
