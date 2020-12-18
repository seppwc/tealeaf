import { TealValueObject } from "../types";
import {
  addPrefixStringTag,
  addSuffixStringTag,
  joinTokenAndValueString,
} from "./GenericTagUtils";

/**
 * Takes an TealValueObject and coverts keys and values into a css string of teal design tokens
 * @param obj : TealValueObject
 * @param isSetValue : Boolean - sets whether token number value increments by 100 (Set) or by 1 (Scale)
 * @param customMap:(optional) Array<string> - optional mapping for token value (incases where a scale or set doesnt fit), custom map must be same length as TealObjectArray
 */

export function BuildToCSSString(
  obj: TealValueObject,
  isSetValue: boolean,
  customMap?: string[]
): string {
  const arr: string[] = [];

  for (let i in obj) {
    let prefixedString = addPrefixStringTag(i);

    for (let j in obj[i]) {
      // check that custom map array is same length as arrays in object, need to provide mappings for all items in array.
      let tagValue;
      if (customMap !== undefined) {
        if (customMap.length !== obj[i].length)
          throw RangeError(
            "Any custom mappings provided should be same length as TealValueObject"
          );

        tagValue = customMap[j];
      } else {
        // if Set increment by 100, else increment by 1
        tagValue = isSetValue ? j + "00" : j;
      }

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
