import { Colors, Elevation, Scale, Eases } from "../lib";
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
];

writeFile("teal-core.css", WrapWithRoot(values), () => {});
