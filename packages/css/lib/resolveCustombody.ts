export function resolveCustomBody(property: string, value: string): string {
  switch (property.toLowerCase()) {
    case "paddingy":
      return `padding-top: ${value};padding-bottom: ${value}`;
    case "paddingx":
      return `padding-left: ${value};padding-right: ${value}`;
    case "marginy":
      return `margin-top: ${value};margin-bottom: ${value}`;
    case "marginx":
      return `margin-left: ${value};margin-right: ${value}`;
    case "bordertopradius":
      return `border-top-left-radius: ${value};border-top-right-radius: ${value};`;
    case "borderrightradius":
      return `border-top-right-radius: ${value};border-bottom-right-radius: ${value};`;
    case "borderbottomradius":
      return `border-bottom-left-radius: ${value};border-bottom-right-radius: ${value};`;
    case "borderleftradius":
      return `border-top-left-radius: ${value};border-bottom-left-radius: ${value};`;
    default:
      return "";
  }
}
