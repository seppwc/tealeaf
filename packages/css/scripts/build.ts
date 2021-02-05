import { BuildToFile } from "../lib/BuildToFile";
import CONFIG from "../stub/DefaultConfigStub";

Promise.all([BuildToFile("tealeaf-css", CONFIG)]).then(() => {
  console.log("Finished Build");
});
