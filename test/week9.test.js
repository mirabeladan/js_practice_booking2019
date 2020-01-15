const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrima,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");
  
  describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(272);
    });
  
    test("if no multiples are not found in the array, returns null", () => {
      expect(sumMultiples([1, 4, 7, 8, 1, 11])).toBe(null);
    });
  });

  