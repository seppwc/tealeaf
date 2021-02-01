import { addSuffixStringTag } from "../utils/addSuffixStringTag";

describe("addSuffixStringTag", function () {
  const tests = [
    { prefix: "test", suffix: "one", expected: "test-one" },
    { prefix: "hello", suffix: "world", expected: "hello-world" },
    { prefix: "boolean", suffix: "true", expected: "boolean-true" },
    { prefix: "number", suffix: "1", expected: "number-1" },
  ];

  it("should concatenate a prefix string with a suffix string", function () {
    tests.forEach((test) => {
      expect(addSuffixStringTag(test.prefix, test.suffix)).toBe(test.expected);
    });
  });
});
