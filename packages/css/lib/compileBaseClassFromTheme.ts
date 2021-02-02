import { escapeString } from "../utils";
import { ConfigInterface } from "../types";
import * as _ from "lodash";
import { resolveClassDeclarations } from "./resolveClassDeclarations";

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

  return _.flatten(classes).join("");
}
