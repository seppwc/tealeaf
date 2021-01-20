import { writeFile } from "fs/promises";
import DEFAULT_CONFIG from "../stub/DefaultConfig";
import { buildClassNames } from "./BuildClassNames";
import { resolveConfigFunctions } from "./resolveConfigFunctions";
import { ConfigInterface } from "../types";

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

    writeFile(`${filename}.css`, data, "utf-8")
      .then(resolve)
      .catch((err) => {
        console.error(err);
        reject();
      });
    console.log("End Process: ", filename);
  });
}
