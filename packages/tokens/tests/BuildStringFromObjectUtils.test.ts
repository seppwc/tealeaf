import { BuildToCSSString } from "../utils/BuildStringFromObjectUtils";

describe("BuildToCSSString", () => {
  it("should throw TypeError if not passed valid TealValueObject with properties", () => {
    expect(() => BuildToCSSString({})).toThrow(TypeError);
  });

  it("should return a string with keys prefixed and property values concatentated", () => {
    expect(
      BuildToCSSString({
        red: {
          100: "var(--color-100)",
          200: "var(--color-200)",
          300: "var(--color-300)",
          400: "var(--color-400)",
          500: "var(--color-500)",
          600: "var(--color-600)",
        },
      })
    ).toBe(
      "--tl-red-100:var(--color-100);--tl-red-200:var(--color-200);--tl-red-300:var(--color-300);--tl-red-400:var(--color-400);--tl-red-500:var(--color-500);--tl-red-600:var(--color-600);"
    );
  });
});
