import { WrapWithMediaQuery } from "../lib/wrapWithMediaQuery";

describe("wrapWithMediaQuery", () => {
  const tests = [
    {
      title: "",
      inputs: { data: "some data", screen: "740px" },
      output: "`@media only screen and (min-width: ${screen}){${data}}`",
    },
  ];

  tests.forEach((test) => {
    it(test.title, () => {
      expect(WrapWithMediaQuery(test.inputs.data, test.inputs.screen));
    });
  });
});
