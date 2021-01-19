import { BuildToFile } from "../lib/BuildToFile";

Promise.all([BuildToFile("teal-ui")]).then(() => {
  console.log("Finished Build");
});
