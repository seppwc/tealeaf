import { Colors as colors } from "./colors";
import { Elevation as elevations } from "./elevation";
import { Scale as scales } from "./scale";
import { Eases as eases } from "./eases";
import { Radius as radius } from "./radius";

export const Colors = colors;
export const Elevation = elevations;
export const Scale = scales;
export const Eases = eases;
export const Radius = radius;

export const CoreProperties = {
  ...colors,
  ...elevations,
  ...scales,
  ...eases,
  ...radius,
};
