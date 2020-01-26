const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinnerx,
  } = require("../challenges/week10");
  
  describe("sumMDigits", () => {
    test("This function takes a number, e.g. 123 and returns the sum of all its digits", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(4321)).toBe(10);
    });
    test("If a non-integer or negative number is entered, the program will ask for a positive integer to avoid confusion", () => {
        expect(sumDigits(-4)).toBe("Please input a positive integer");
        expect(sumDigits(4.5)).toBe("Please input a positive integer");
      });
  });