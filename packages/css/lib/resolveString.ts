import { Variants } from "../types";
import { escapeString } from "../utils";

import { getVariantSuffixString } from "./getVariantSuffixString";

export function resolveString(
  classname: string,
  body: string,
  classSet: string,
  variant?: Omit<Variants, "responsive">
): string {
  const variantSuffix = getVariantSuffixString(variant);

  if (variantSuffix) {
    return `${escapeString(classname)}-${escapeString(
      classSet
    )}${variantSuffix}:${variant}{${body};}`;
  }

  return `${escapeString(classname)}${classname && "-"}${escapeString(
    classSet
  )}{${body};}`;
}
