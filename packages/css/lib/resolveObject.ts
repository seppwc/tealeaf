import { mapKeys } from "lodash";

export function resolveObject(set: string, obj: { [key: string]: string }) {
  return mapKeys(obj, (_, key) => `${set}-${key}`);
}
