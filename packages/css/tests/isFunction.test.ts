import { isFunction } from "../utils/isFunction";

describe("utils/isFunction", () => {
  const values: any[] = [
    { input: true, expected: false },
    { input: 1, expected: false },
    { input: "string", expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: () => {}, expected: true },
    { input: function () {}, expected: true },
    { input: new (class {})(), expected: false },
  ];

  it("should return a true if passed value is a function and false is any other type", () => {
    values.forEach((test) => {
      expect(isFunction(test.input)).toBe(test.expected);
    });
  });
});
