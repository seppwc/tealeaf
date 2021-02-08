import { CUSTOM_PROPERTIES } from "../constants";

export function isCustomPropertyValue(property: string): boolean {
  return CUSTOM_PROPERTIES.includes(property.toLowerCase());
}
