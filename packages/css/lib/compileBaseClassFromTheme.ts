import { escapeString, convertToKababCase, isObject } from "../utils";
import { ConfigInterface } from "../types";
import * as _ from "lodash";

export enum Variants {
  "responsive",
  "hover",
  "focus",
  "visited",
}

export function compileBaseClassesFromTheme(
  config: ConfigInterface,
  prefix?: string
): string {
  const prefixedString = prefix ? escapeString(`.@${prefix}:`) : ".";
  const classes = Object.keys(config.classNames).map((propertyName) => {
    const theme_obj = config.theme[propertyName]; // theme object of that class
    const className = config.classNames[propertyName];
    const variantList = config.variants[propertyName];

    return _.flatten([
      ...variantList.map((v) =>
        resolveClassDeclarations(
          prefixedString,
          className,
          propertyName,
          theme_obj,
          Variants[v]
        )
      ),
    ]);
  });

  //TODO: ADD Variants Heres (Hover, Focus) <- in this order

  return _.flatten(classes).join("");
}

function resolveClassDeclarations(
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

function isXY(property: string): boolean {
  switch (property) {
    case "paddingX":
      return true;
    case "paddingY":
      return true;
    case "marginX":
      return true;
    case "marginY":
      return true;
    default:
      return false;
  }
}

function resolveXYBody(property: string, value: string): string {
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

function getVariantSuffixString(variant: string): string {
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

function resolveObject(set: string, obj: { [key: string]: string }) {
  return _.mapKeys(obj, (_, key) => `${set}-${key}`);
}

function resolveString(
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

// ` .{prefix}{className}{if-nest:classname}{set/scale}{variant}`{ {cssproperty}:{value}; }
