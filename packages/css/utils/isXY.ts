export function isXY(property: string): boolean {
  switch (property.toLowerCase()) {
    case "paddingx":
      return true;
    case "paddingy":
      return true;
    case "marginx":
      return true;
    case "marginy":
      return true;
    default:
      return false;
  }
}
