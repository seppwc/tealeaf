import { writeFile } from "fs/promises";
import DEFAULT_CONFIG from "../stub/DefaultConfig";
import { buildClassNames } from "./BuildClassNames";
import { resolveConfigFunctions } from "./resolveConfigFunctions";
import { ConfigInterface } from "../types";
import CleanCSS = require("clean-css");

export async function BuildToFile(
  filename: string,
  config: ConfigInterface = DEFAULT_CONFIG
): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("Processing: ", filename);
    const { screens, ...rest } = config.theme;
    const resolvedConfig = {
      ...config,
      theme: resolveConfigFunctions(rest),
    };

    const data = Object.keys({ none: "", ...screens })
      .map((s) => {
        return buildClassNames(resolvedConfig, s, screens[s]);
      })
      .join(" ");

    const cleanCSS = new CleanCSS().minify(data);

    writeFile(`${filename}.css`, cleanCSS.styles, "utf-8")
      .then(resolve)
      .catch((err) => {
        console.error(err);
        reject();
      });

    console.log("End Process: ", filename);
  });
}
