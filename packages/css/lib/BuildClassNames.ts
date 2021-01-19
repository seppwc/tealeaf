import { compileBaseClassesFromTheme } from "./compileBaseClassFromTheme";
import { WrapWithMediaQuery } from "./wrapWithMediaQuery";

import { ConfigInterface } from "../types";

export function buildClassNames(
  config: ConfigInterface,
  screentag: string,
  screenvalue: string
): string {
  return screentag === "none"
    ? compileBaseClassesFromTheme(config)
    : WrapWithMediaQuery(
        compileBaseClassesFromTheme(config, screentag),
        screenvalue
      );
}
