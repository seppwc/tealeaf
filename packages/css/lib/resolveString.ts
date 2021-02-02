import { escapeString } from "../utils";
import { getVariantSuffixString } from "./getVariantSuffixString";

export function resolveString(
  classname: string,
  body: string,
  classSet: string,
  variant?: string
): string {
  if (variant) {
    const variantSuffix = getVariantSuffixString(variant);
    return `${escapeString(classname)}-${escapeString(
      classSet
    )}${variantSuffix}:${variant}{${body};}`;
  }

  return `${escapeString(classname)}${classname && "-"}${escapeString(
    classSet
  )}{${body};}`;
}
