import { resolveObject } from "../lib/resolveObject";

describe("resolveObject", () => {
  const tests = [
    {
      title:
        "should map set key and object keys to new object when set key and object keys are concat",
      inputs: {
        set: "red",
        object: { "100": "100px" },
      },
      output: {
        "red-100": "100px",
      },
    },
  ];

  tests.forEach((test) => {
    it(test.title, () => {
      expect(resolveObject(test.inputs.set, test.inputs.object)).toMatchObject(
        test.output
      );
    });
  });
});
