/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  let array = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      array.push(arr[i]);
    }
  }
  let sum = array.reduce(function (a, b) { return a + b; }, 0);
  if (sum === 0) {
    return null;
  }
  else {
    return sum;
  }
}

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  const arr = str.toUpperCase().split('');
  if (arr.length === 4 &&
    arr.indexOf('C') !== -1
    && arr.indexOf('G') !== -1
    && arr.indexOf('T') !== -1
    && arr.indexOf('A') !== -1) {
    return true;
  }
  else if (arr.length !== 4) {
    return "not a valid DNA string"
  }
  return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (isValidDNA(str) === false) throw new Error("not a valid DNA string");
  let complementaryDNA = [];
  let upperString = str.toUpperCase();
  for (let i = 0; i < upperString.length; i++) {
    if (upperString[i] === "C") {
      complementaryDNA.push("G")
    }
    else if (upperString[i] === "G") {
      complementaryDNA.push("C")
    }
    else if (upperString[i] === "T") {
      complementaryDNA.push("A")
    }
    else if (upperString[i] === "A") {
      complementaryDNA.push("T")
    }
  }
  return complementaryDNA.join("");
}
  ;

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("a number is required")
  if (n < 2) return false;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  return Array(n).fill(Array(n).fill(fill));
};


/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let days = 0;
  staff.forEach((person) => {
    for (let i = 0; i < person.rota.length; i++) {
      if (person.rota[i] === day) {
        days++;
      }
    }
  });
  if (days >= 3) {
    return true;
  }
  return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
