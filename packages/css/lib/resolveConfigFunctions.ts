import { isFunction } from "../utils";
import { ThemeInterface } from "../types";

export function resolveConfigFunctions(
  theme: Partial<ThemeInterface>
): Partial<ThemeInterface> {
  let resolvedTheme: Partial<ThemeInterface> = { ...theme };

  // function passed to config file to pass values around the config.
  function resolveTheme(property: string): any {
    return theme[property];
  }

  Object.keys(theme).forEach((property) => {
    // loops over theme, checks if it is a function, if function pass the resolve theme function as an argument;
    if (isFunction(theme[property])) {
      const c = theme[property](resolveTheme);
      // replace the function in the config with the values it returns.
      resolvedTheme = { ...resolvedTheme, [property]: c };
    }
  });

  return resolvedTheme;
}
