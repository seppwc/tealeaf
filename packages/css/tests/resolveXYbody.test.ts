import { resolveXYBody } from "../lib/resolveXYbody";

describe("resolveXYBody", () => {
  const tests = [
    {
      title:
        "should accepted paddingy and return as string with the padding top and padding bottom assign to the value",
      inputs: {
        property: "paddingY",
        value: "10px",
      },
      output: `padding-top: 10px; padding-bottom: 10px`,
    },
    {
      title:
        "should accepted paddingX and return as string with the padding right and padding left assign to the value",
      inputs: {
        property: "paddingX",
        value: "10px",
      },
      output: `padding-left: 10px; padding-right: 10px`,
    },
    {
      title:
        "should accepted marginy and return as string with the margin top and margin bottom assign to the value",
      inputs: {
        property: "marginY",
        value: "10px",
      },
      output: `margin-top: 10px; margin-bottom: 10px`,
    },
    {
      title:
        "should accepted marginX and return as string with the margin right and margin left assign to the value",
      inputs: {
        property: "marginX",
        value: "10px",
      },
      output: `margin-left: 10px; margin-right: 10px`,
    },
    {
      title: "should accepted any invalid xy value and return empty string",
      inputs: {
        property: "marginZ",
        value: "10px",
      },
      output: ``,
    },
  ];

  tests.forEach((test) => {
    it(test.title, () => {
      expect(resolveXYBody(test.inputs.property, test.inputs.value)).toBe(
        test.output
      );
    });
  });
});
