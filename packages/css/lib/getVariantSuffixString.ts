export function getVariantSuffixString(variant: string): string {
  switch (variant) {
    case "hover":
      return "\\:hover";
    case "focus":
      return "\\:focus";
    case "visted":
      return "\\:visited";
    default:
      return "";
  }
}
