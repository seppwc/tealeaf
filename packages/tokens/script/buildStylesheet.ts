import { colors, elevations, scales, eases, radius } from "../lib";
import {
  BuildToCSSString,
  WrapWithRoot,
} from "../utils/BuildStringFromObjectUtils";
import { writeFile } from "fs";

const values = [
  BuildToCSSString(colors),
  BuildToCSSString(elevations),
  BuildToCSSString(scales),
  BuildToCSSString(eases),
  BuildToCSSString(radius),
];

writeFile("teal-tokens.css", WrapWithRoot(values), () => {});
