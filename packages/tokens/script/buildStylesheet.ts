import { colors, elevations, scales, eases, radius } from "../lib";
import { BuildToCSSString, WrapWithRoot } from "../utils";
import { writeFile } from "fs";

const values = [
  BuildToCSSString(colors),
  BuildToCSSString(elevations),
  BuildToCSSString(scales),
  BuildToCSSString(eases),
  BuildToCSSString(radius),
];

writeFile("tealeaf-tokens.css", WrapWithRoot(values), () => {});
