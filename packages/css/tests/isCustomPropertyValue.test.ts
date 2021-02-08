import { isCustomPropertyValue } from "../utils/isCustomPropertyValue";

describe("isCustomPropertyValue", () => {
  const tests = [
    { input: "paddingX", expected: true },
    { input: "paddingY", expected: true },
    { input: "paddingZ", expected: false },
    { input: "marginX", expected: true },
    { input: "marginY", expected: true },
    { input: "marginZ", expected: false },
    { input: "PADDINGX", expected: true },
    { input: "PADDINGY", expected: true },
    { input: "PADDINGZ", expected: false },
    { input: "MARGINX", expected: true },
    { input: "MARGINY", expected: true },
    { input: "MARGINZ", expected: false },
    { input: "borderradiustopleft", expected: true },
    { input: "borderradiustopright", expected: true },
    { input: "borderradiusbottomleft", expected: true },
    { input: "borderradiusbottomright", expected: true },
    { input: "borderRadiusTopLeft", expected: true },
    { input: "borderRadiusTopRight", expected: true },
    { input: "borderRadiusBottomLeft", expected: true },
    { input: "borderRadiusBottomRight", expected: true },
    { input: "sasd", expected: false },
    { input: "margin", expected: false },
  ];

  it("should return true if property is paddingX paddingY marginX or marginY else false", () => {
    tests.forEach((test) => {
      expect(isCustomPropertyValue(test.input)).toBe(test.expected);
    });
  });
});
