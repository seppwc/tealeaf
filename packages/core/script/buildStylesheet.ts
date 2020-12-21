import { Colors, Elevation, Scale, Eases, Radius } from "../lib";
import {
  BuildToCSSString,
  WrapWithRoot,
} from "../utils/BuildStringFromObjectUtils";
import { writeFile } from "fs";

const values = [
  BuildToCSSString(Colors),
  BuildToCSSString(Elevation),
  BuildToCSSString(Scale),
  BuildToCSSString(Eases),
  BuildToCSSString(Radius),
];

writeFile("teal-core.css", WrapWithRoot(values), () => {});
