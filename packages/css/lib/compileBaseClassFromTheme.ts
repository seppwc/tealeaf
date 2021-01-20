import { escapeString, convertToKababCase, isObject } from "../utils";
import { ConfigInterface } from "../types";
import * as _ from "lodash";

export enum Variants {
  "responsive",
  "hover",
  "focus",
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
        return (
          prefix +
          resolveString(
            className,
            property,
            key,
            resolvedObject[key],
            variantVal
          )
        );
      });

      return _.flatten(obj);
    }

    return [
      prefix + resolveString(className, property, classSet, value, variantVal),
    ];
  });

  return _.flattenDeep(arr);
}

function resolveObject(set: string, obj: { [key: string]: string }) {
  return _.mapKeys(obj, (_, key) => `${set}-${key}`);
}

function resolveString(
  classname: string,
  property: string,
  classSet: string,
  value: string,
  variant?: string
): string {
  if (variant) {
    return `${escapeString(classname)}-${escapeString(
      classSet
    )}:${variant}{${convertToKababCase(property)}:${value};}`;
  }

  return `${escapeString(classname)}-${escapeString(
    classSet
  )}{${convertToKababCase(property)}:${value};}`;
}

// ` .{prefix}{className}{if-nest:classname}{set/scale}{variant}`{ {cssproperty}:{value}; }
