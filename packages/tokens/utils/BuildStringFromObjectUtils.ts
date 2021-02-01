import { TealValueObject } from "../types";
import { addPrefixStringTag } from "./addPrefixStringTag";
import { addSuffixStringTag } from "./addSuffixStringTag";
import { joinTokenAndValueString } from "./joinTokenAndValueString";

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
