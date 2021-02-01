import { WrapWithRoot } from "../utils/WrapWithRoot";

describe("WrapWithRoot", function () {
  const strings = [
    { property: "test:one;", expected: ":root{test:one;}" },
    { property: "hello:world;", expected: ":root{hello:world;}" },
    { property: "boolean:true;", expected: ":root{boolean:true;}" },
    { property: "number:1;", expected: ":root{number:1;}" },
  ];

  const arrays: any[] = [
    {
      inputArr: [],
      expected: "",
    },
    {
      inputArr: ["one", "two", "three"],
      expected: ":root{one two three}",
    },
    {
      inputArr: ["background:red;", "color:green;", "font-size:10px;"],
      expected: ":root{background:red; color:green; font-size:10px;}",
    },
  ];

  it("should accept string value and wrap with a :root tag", function () {
    strings.forEach((test) => {
      expect(WrapWithRoot(test.property)).toBe(test.expected);
    });
  });

  it("should accept an array of strings, should join the array into one string and then wrap with a :root tag", () => {
    arrays.forEach((test) => {
      expect(WrapWithRoot(test.inputArr)).toBe(test.expected);
    });
  });
});
