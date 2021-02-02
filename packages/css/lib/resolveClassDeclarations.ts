import _ from "lodash";
import { isObject } from "../utils";
import { convertToKababCase } from "../utils";
import { isXY } from "../utils/isXY";
import { Variants } from "./compileBaseClassFromTheme";
import { resolveObject } from "./resolveObject";
import { resolveString } from "./resolveString";
import { resolveXYBody } from "./resolveXYbody";

export function resolveClassDeclarations(
  prefix: string,
  className: string,
  property: string,
  theme: any,
  variant: Variants
): string[] {
  const arr = Object.keys(theme).map((classSet) => {
    //classSet = keys in object: red,blue, sm,md,lg etc
    const value = theme[classSet]; // value (could be object if a color)

    const variantVal =
      Variants[variant] !== "responsive" ? Variants[variant] : undefined;

    if (isObject(value)) {
      const resolvedObject = resolveObject(classSet, value); // {"red-000" : #FFF3F3, etc...}
      const obj = Object.keys(resolvedObject).map((key) => {
        const body = isXY(property)
          ? resolveXYBody(property, resolvedObject[key])
          : `${convertToKababCase(property)}:${resolvedObject[key]}`;

        return prefix + resolveString(className, body, key, variantVal);
      });

      return _.flatten(obj);
    }

    const body = isXY(property)
      ? resolveXYBody(property, value)
      : `${convertToKababCase(property)}:${value}`;

    return [prefix + resolveString(className, body, classSet, variantVal)];
  });

  return _.flattenDeep(arr);
}
