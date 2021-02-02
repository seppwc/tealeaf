import _ from "lodash";

export function resolveObject(set: string, obj: { [key: string]: string }) {
  return _.mapKeys(obj, (_, key) => `${set}-${key}`);
}
