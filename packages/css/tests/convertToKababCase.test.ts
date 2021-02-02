import { convertToKababCase } from "../utils/convertToKababCase";

describe("convertToKababCase", () => {
  const values = [
    { input: "helloWorld", expected: "hello-world" },
    { input: "backgroundColor", expected: "background-color" },
    { input: "color", expected: "color" },
    {
      input: "javascriptTestingIsNotFun",
      expected: "javascript-testing-is-not-fun",
    },
    {
      input: "allTestAndNoPlayMakesSeppADullBoy",
      expected: "all-test-and-no-play-makes-sepp-a-dull-boy",
    },
  ];

  it("should take a camelcase string return it in kabab case", () => {
    values.forEach((test) => {
      expect(convertToKababCase(test.input)).toBe(test.expected);
    });
  });
});
