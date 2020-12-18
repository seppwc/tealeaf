import { Colors, Elevation, Scale, Eases, Radius } from "../lib";
import {
  BuildToCSSString,
  WrapWithRoot,
} from "../utils/BuildStringFromObjectUtils";
import { writeFile } from "fs";

const values = [
  BuildToCSSString(Colors, true),
  BuildToCSSString(Elevation, false),
  BuildToCSSString(Scale, false),
  BuildToCSSString(Eases, false, ["in", "out", "inout"]),
  BuildToCSSString(Radius, false, ["1", "2", "3", "4", "5", "full"]),
];

writeFile("teal-core.css", WrapWithRoot(values), () => {});
