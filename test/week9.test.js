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
      expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
    });
  
    test("if no multiples are not found in the array, returns null", () => {
      expect(sumMultiples([1, 4, 7, 8, 1, 11])).toBe(null);
    });
  });

  describe("isValidDNA", () => {
    test("returns true/false if string is a valid DNA string only containing C, G, T or A", () => {
      expect(isValidDNA("CGTA")).toBe(true);
      expect(isValidDNA("CGTD")).toBe(false);
    });
  
    test("can still read characters no matter the case", () => {
      expect(isValidDNA("cGtA")).toBe(true);
    });

    test("can still read characters even if in a different order", () => {
      expect(isValidDNA("CTAG")).toBe(true);
    });

    test("A DNA string always needs to have four characters. IF more or less, return 'not a valid DNA string'", () => {
      expect(isValidDNA("CTAGA")).toBe("not a valid DNA string");
      expect(isValidDNA("CT")).toBe("not a valid DNA string");
    });
  });



  