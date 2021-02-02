import { Variants } from "../types";

export function getVariantSuffixString(
  variant: Omit<Variants, "responsive">
): string {
  switch (variant) {
    case "hover":
      return "\\:hover";
    case "focus":
      return "\\:focus";
    case "visited":
      return "\\:visited";
    default:
      return "";
  }
}
