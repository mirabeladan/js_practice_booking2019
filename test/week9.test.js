const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
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

describe("getComplementaryDNA", () => {
  test("This function should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("TAGC")).toBe("ATCG");
    expect(getComplementaryDNA("TACG")).toBe("ATGC");
  });

  test("Can still return the corect characters no matter the case", () => {
    expect(getComplementaryDNA("cgta")).toBe("GCAT");
    expect(getComplementaryDNA("tagc")).toBe("ATCG");
    expect(getComplementaryDNA("tACg")).toBe("ATGC");
  });

  test("If invalid DNA is passed (ie, less than four characters or different characters - failing the function above, return 'not a valid DNA string, throws an error'", () => {
   expect(() => { getComplementaryDNA ("test"); }).toThrow("not a valid DNA string");
 }); 
});


describe("isItPrime", () => {
  test("This function should receive a number and return true/false depending on whether it is a prime number or not."
    , () => {
      expect(isItPrime(7)).toBe(true);
      expect(isItPrime(8)).toBe(false);
      expect(isItPrime(11)).toBe(true);
    });
});

describe("createMatrix", () => {
  test("This function should receive a string and return an array of n arrays, each filled with n items."
    , () => {
      expect(createMatrix(3, "foo")).toEqual(
        [
          ["foo", "foo", "foo"],
          ["foo", "foo", "foo"],
          ["foo", "foo", "foo"]
        ]
      );
      expect(createMatrix(2, "bar")).toEqual(
        [
          ["bar", "bar"],
          ["bar", "bar"]
        ]
      );
    });

  test("This function should receive a number and return an array of n arrays, each filled with n numbers."
    , () => {
      expect(createMatrix(1, 5)).toEqual([[5]]);
      expect(createMatrix(3, 5)).toEqual([[5, 5, 5], [5, 5, 5], [5, 5, 5]]);
    });

  test("This function should receive a array and return an array of n arrays, each filled with n arrays."
    , () => {
      expect(createMatrix(3, [5, "foo"])).toEqual(
        [
          [[5, "foo"], [5, "foo"], [5, "foo"]],
          [[5, "foo"], [5, "foo"], [5, "foo"]],
          [[5, "foo"], [5, "foo"], [5, "foo"]],
        ]
      );
    });
});

describe("areWeCovered", () => {
  const staff = [
    { name: "Sally", rota: ["Monday", "Tuesday", "Sunday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Bob", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Alice", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] },
  ]
  test("returns true if at least 3 staff scheduled for the given day"
    , () => {
      expect(areWeCovered(staff, "Monday")).toBe(true);
      expect(areWeCovered(staff, "Sunday")).toBe(true);
    });

  test("returns false if there are less than 3 staff members scheduled for the given day"
    , () => {
      expect(areWeCovered(staff, "Thursday")).toBe(false);
      expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });
});