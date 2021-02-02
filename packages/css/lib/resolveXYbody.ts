export function resolveXYBody(property: string, value: string): string {
  switch (property) {
    case "paddingY":
      return `padding-top: ${value}; padding-bottom: ${value}`;
    case "paddingX":
      return `padding-left: ${value}; padding-right: ${value}`;
    case "marginY":
      return `margin-top: ${value}; margin-bottom: ${value}`;
    case "marginX":
      return `margin-left: ${value}; margin-right: ${value}`;
  }

  return "";
}
