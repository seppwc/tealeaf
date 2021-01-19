import { escapeString, convertToKababCase, isObject } from "../utils";
import { ConfigInterface } from "../types";

export function compileBaseClassesFromTheme(
  config: ConfigInterface,
  prefix?: string
): string {
  const prefixedString = prefix ? `@${prefix}:` : "";
  const classes = Object.keys(config.classNames).map((name) => {
    return Object.keys(config.theme[name]).map((value) => {
      if (isObject(config.theme[name][value])) {
        const obj = Object.keys(config.theme[name][value]).map((val) => {
          // TODO
        });
      }

      return `.${escapeString(prefixedString)}${
        config.classNames[name]
      }-${escapeString(value)}{${convertToKababCase(name)}:${
        config.theme[name][value]
      }};`;
    });
  });

  return classes.join(",");
}
