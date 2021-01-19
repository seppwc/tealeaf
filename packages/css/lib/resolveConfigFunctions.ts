import { isFunction } from "../utils";
import { ThemeInterface } from "../types";

export function resolveConfigFunctions(
  theme: Partial<ThemeInterface>
): Partial<ThemeInterface> {
  let resolvedTheme: Partial<ThemeInterface> = { ...theme };

  function resolveTheme(property: string): any {
    return theme[property];
  }

  Object.keys(theme).forEach((property) => {
    if (isFunction(theme[property])) {
      const c = theme[property](resolveTheme);
      resolvedTheme = { ...resolvedTheme, [property]: c };
    }
  });

  return resolvedTheme;
}
