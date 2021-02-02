import { resolveString } from "../lib/resolveString";

type TestType = {
  title: string;
  inputs: {
    className: string;
    body: string;
    classSet: string;
    variant?: string;
  };
  output: string;
};

describe("resolveString", () => {
  const tests: TestType[] = [
    {
      title: "",
      inputs: {
        className: "text",
        body: "color:var(--tl-red-500)",
        classSet: "red-500",
        variant: null,
      },
      output: "text-red-500{color:var(--tl-red-500);}",
    },
    {
      title: "",
      inputs: {
        className: "bg",
        body: "background-color:var(--tl-red-500)",
        classSet: "red-500",
        variant: null,
      },
      output: "bg-red-500{background-color:var(--tl-red-500);}",
    },
    {
      title: "",
      inputs: {
        className: "bg",
        body: "background-color:var(--tl-red-500)",
        classSet: "red-500",
        variant: "focus",
      },
      output: "bg-red-500\\:focus:focus{background-color:var(--tl-red-500);}",
    },
    {
      title: "",
      inputs: {
        className: "bg",
        body: "background-color:var(--tl-red-500)",
        classSet: "red-500",
        variant: "hover",
      },
      output: "bg-red-500\\:hover:hover{background-color:var(--tl-red-500);}",
    },
    {
      title: "",
      inputs: {
        className: "text",
        body: "color:var(--tl-red-500)",
        classSet: "red-500",
        variant: "visited",
      },
      output: "text-red-500\\:visited:visited{color:var(--tl-red-500);}",
    },
  ];

  tests.forEach((test) => {
    const { className, body, classSet, variant } = test.inputs;

    it(test.title, () => {
      expect(resolveString(className, body, classSet, variant)).toBe(
        test.output
      );
    });
  });
});
