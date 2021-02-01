import { joinTokenAndValueString } from "../utils/joinTokenAndValueString";

describe("jointokenAndValueString", function () {
  const tests = [
    { property: "test", value: "one", expected: "test:one;" },
    { property: "hello", value: "world", expected: "hello:world;" },
    { property: "boolean", value: "true", expected: "boolean:true;" },
    { property: "number", value: "1", expected: "number:1;" },
  ];

  it("should concatenate a property string with a value string separated by a colon and end in semi colon", function () {
    tests.forEach((test) => {
      expect(joinTokenAndValueString(test.property, test.value)).toBe(
        test.expected
      );
    });
  });
});
