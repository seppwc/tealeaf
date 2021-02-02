import { escapeString } from "../utils/escapbleString";

describe("utils/escapeString", () => {
  const values = [
    { input: "hello", expected: `hello` },
    { input: ":hover", expected: `\\:hover` },
    { input: "@sm", expected: `\\@sm` },
    { input: "color:hover", expected: `color\\:hover` },
    { input: "@sm:bg-red", expected: `\\@sm\\:bg-red` },
  ];

  it("should accept string if string is escapeable, it should return escapedVersion", () => {
    values.forEach((test) => {
      expect(escapeString(test.input)).toMatch(test.input);
    });
  });
});
