export function convertToKababCase(str: string) {
  return str
    .split("")
    .map((char: string) => {
      return new RegExp("[A-Z]").test(char)
        ? `-${char.toLowerCase()}`
        : char.toLowerCase();
    })
    .join("");
}
