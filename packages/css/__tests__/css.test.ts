const { isEscapableString } = require("../utils/isEscapbleString");

describe("@teal/css", () => {
  describe("Utils: IsEscapableString", () => {
    it('should escape "@"', () => {
      expect(isEscapableString("@")).toBe("@");
    });
  });
});
