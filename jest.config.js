module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: false,
    },
  },
  testEnvironment: "node",
  verbose: true,
  roots: ["<rootDir>"],
  projects: ["<rootDir>/packages/tokens", "<rootDir>/packages/css"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],

  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/script/**.ts", "**/utils/**.ts", "**/lib/**.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["json", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
