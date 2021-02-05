import { isObject } from "../utils/isObject";

describe("utils/isObject", () => {
  const values: any[] = [
    { input: true, expected: false },
    { input: 1, expected: false },
    { input: "string", expected: false },
    { input: {}, expected: true },
    { input: { hello: "world" }, expected: true },
    { input: [], expected: false },
    { input: () => {}, expected: false },
    { input: function () {}, expected: false },
  ];

  it("should return a true if passed value is an Object literally and false is any other type", () => {
    values.forEach((test) => {
      expect(isObject(test.input)).toBe(test.expected);
    });
  });
});
