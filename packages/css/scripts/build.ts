import { BuildToFile } from "../lib/BuildToFile";
import LITE_CONFIG from "../stub/VariableConfig";

Promise.all([BuildToFile("tealeaf-css", LITE_CONFIG)]).then(() => {
  console.log("Finished Build");
});
