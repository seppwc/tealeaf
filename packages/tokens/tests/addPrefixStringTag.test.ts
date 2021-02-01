import { addPrefixStringTag } from "../utils/addPrefixStringTag";

describe("addPrefixStringTag", function () {
  const tests = [
    { input: "test", expected: "--tl-test" },
    { input: 1, expected: "--tl-1" },
    { input: true, expected: "--tl-true" },
    { input: "hello-world", expected: "--tl-hello-world" },
    { input: { one: 1, two: 2 }, expected: "--tl-[object Object]" },
  ];

  it("should add the --tl- prefix to string", function () {
    expect(addPrefixStringTag("test")).toBe("--tl-test");
  });

  it("should add the --tl- prefix to any type and return string", function () {
    tests.forEach((test) => {
      expect(addPrefixStringTag(test.input)).toBe(test.expected);
      expect(typeof addPrefixStringTag(test.input)).toBe("string");
    });
  });
});
