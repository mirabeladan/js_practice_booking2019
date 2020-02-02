const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
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

  describe("createRange", () => {
    test("This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range.", () => {
      expect(createRange(1,10,3)).toEqual([1, 4, 7, 10]);
      expect(createRange(2, 14, 6)).toEqual([2, 8, 14]);
    });
    test("Step is an optional parameter. If it is not provided, assume the step is 1", () => {
        expect(createRange(1,3)).toEqual([1, 2, 3]);
      });
  });

  describe("getScreenTimeAlertList", () => {
    test("should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
      expect(getScreentimeAlertList([
         {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                         { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
           },
           {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                         { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                         { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                         { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
         ], "2019-05-04")).toEqual("beth_1234");
    });
  });

  describe("hexToRGB", () => {
    test("returns rgb color code in decimal given hexadecimal color codes", () => {
      expect(hexToRGB("#C0C0C0")).toBe("rgb(192,192,192)");
      expect(hexToRGB("#556666")).toBe("rgb(85,102,102)");
    });
});

describe("findWinner", () => {
  test("returns winner given an board array", () => {
    expect(findWinner([
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
    ])).toBe("X");
    expect(findWinner([
      ["X", "X", "0"],
      ["X", "0", "0"],
      [null, "X", "0"]
    ])).toBe("0");
    expect(findWinner([
      ["X", "0", null],
      [null, null, "0"],
      ["X", null, "0"]
    ])).toBe(null);
  });
});