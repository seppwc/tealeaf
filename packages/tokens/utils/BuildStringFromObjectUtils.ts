import { TealValueObject } from "../types";
import {
  addPrefixStringTag,
  addSuffixStringTag,
  joinTokenAndValueString,
} from "./GenericTagUtils";

/**
 * Takes an TealValueObject and coverts keys and values into a css string of teal design tokens
 * @param obj : TealValueObject
 */

export function BuildToCSSString(obj: TealValueObject): string {
  const arr: string[] = [];

  for (let i in obj) {
    let prefixedString = addPrefixStringTag(i);

    for (let j in obj[i]) {
      let tagValue = j;
      let fullTag = addSuffixStringTag(prefixedString, tagValue);
      arr.push(joinTokenAndValueString(fullTag, obj[i][j]));
    }
  }

  return arr.join("");
}

/**
 * wraps a data string in a root tag exposing all tokens at root level
 * @param data
 */

export function WrapWithRoot(data: string | string[]): string {
  let stringData = data;

  if (Array.isArray(data)) {
    stringData = data.join(" ");
  }

  return `:root {${stringData}}`;
}
