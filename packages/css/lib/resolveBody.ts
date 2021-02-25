import { convertToKababCase } from "../utils";
import { isCustomPropertyValue } from "../utils/isCustomPropertyValue";
import { resolveCustomBody } from "./resolveCustombody";

export function resolveBody(property: string, value: string) {
  return isCustomPropertyValue(property)
    ? resolveCustomBody(property, value)
    : `${convertToKababCase(property)}:${value}!important`;
}
