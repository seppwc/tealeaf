import { getVariantSuffixString } from "../lib/getVariantSuffixString";

describe("getVariantSuffixString", () => {
  const tests = [
    {
      title: "should accept hover variant and return escaped :hover string",
      input: "hover",
      expected: `\\:hover`,
    },
    {
      title: "should accept hover variant and return escaped :hover string",
      input: "focus",
      expected: `\\:focus`,
    },
    {
      title: "should accept hover variant and return escaped :hover string",
      input: "visited",
      expected: `\\:visited`,
    },
    {
      title: "should accept no variant and return empty string",
      input: "",
      expected: "",
    },
    {
      title: "should accept invalid variant and return empty string",
      input: "asdasd",
      expected: "",
    },
  ];

  tests.forEach((test) => {
    it(test.title, () => {
      expect(getVariantSuffixString(test.input)).toMatch(test.expected);
    });
  });
});
