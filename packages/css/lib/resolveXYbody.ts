export function resolveXYBody(property: string, value: string): string {
  switch (property.toLowerCase()) {
    case "paddingy":
      return `padding-top: ${value}; padding-bottom: ${value}`;
    case "paddingx":
      return `padding-left: ${value}; padding-right: ${value}`;
    case "marginy":
      return `margin-top: ${value}; margin-bottom: ${value}`;
    case "marginx":
      return `margin-left: ${value}; margin-right: ${value}`;
    default:
      return "";
  }
}
