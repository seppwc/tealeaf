module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  collectCoverageFrom: [
    "**/lib/*.ts",
    "**/utils/*.ts",
    "!**/lib/index.ts",
    "!**/utils/index.ts",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/tokens/lib/**",
  ],
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
