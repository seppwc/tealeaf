export function isXY(property: string): boolean {
  switch (property) {
    case "paddingX":
      return true;
    case "paddingY":
      return true;
    case "marginX":
      return true;
    case "marginY":
      return true;
    default:
      return false;
  }
}
