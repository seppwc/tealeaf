import { Colors as colors } from "./colors";
import { Elevation as elevations } from "./elevation";
import { Scale as scales } from "./scale";
import { Eases as eases } from "./eases";
import { Radius as radius } from "./radius";

export { colors };
export { elevations };
export { scales };
export { eases };
export { radius };

export const CoreProperties = {
  ...colors,
  ...elevations,
  ...scales,
  ...eases,
  ...radius,
};
