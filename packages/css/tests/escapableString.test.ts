import { escapeString } from "../utils/escapbleString";

describe("utils/escapeString", () => {
  const values = [
    { input: "hello", expected: `hello` },
    { input: ":hover", expected: `\\:hover` },
    { input: "@sm", expected: `\\@sm` },
    { input: "1/2", expected: `1\\/2` },
    { input: "color:hover", expected: `color\\:hover` },
    { input: "@sm:bg-red", expected: `\\@sm\\:bg-red` },
    { input: "w-1/2", expected: `w-1\\/2` },
  ];

  it("should accept string if string is escapeable, it should return escapedVersion", () => {
    values.forEach((test) => {
      expect(escapeString(test.input)).toMatch(test.expected);
    });
  });
});
