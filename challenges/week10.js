/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("Please insert a valid number");
  let sum = 0;
  if (Number.isInteger(n) === false) {
    return "Please input a positive integer";
  }
  if (n<0) {
    return "Please input a positive integer"
  }
  let str = n.toString();
  for (let i = 0; i <= str.length - 1; i++) {
    sum += +str[i];
  }
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step=1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let ans = [];
  for (let i = start; i <= end; i=i+step) {
      ans.push(i);
  }
  return ans;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989"
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const userAlert = [];
  users.forEach(person => {
    let screenTimeDay = person.screenTime.filter(usageDay => date === usageDay.date);
    if (screenTimeDay.length > 0) {
      const screenMinutes = Object.values(screenTimeDay[0].usage).reduce((total, amount) => total + amount, 0);
      if (screenMinutes > 100) {
        userAlert.push(person.username);
      }
    }
  });
  return userAlert.toString();
};



/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  let r = 0;
  let g = 0;
  let b = 0;
  if (hexStr.length == 7) {
    r = "0x" + hexStr[1] + hexStr[2];
    g = "0x" + hexStr[3] + hexStr[4];
    b = "0x" + hexStr[5] + hexStr[6];
  } else {
    return false;
  }

  return "rgb(" + +r + "," + +g + "," + +b + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board required");
  let winner = null;
  let boardArr = [];
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    for (let i = 0; i < row.length; i++) {
      boardArr.push(row[i]);
    }
  }

  for (let i = 0; i < board.length; i++) {
    if ((boardArr[0] === boardArr[1]) && (boardArr[0] === boardArr[2])) {
      winner = boardArr[0];
    } else if ((boardArr[3] === boardArr[4]) && (boardArr[3] === boardArr[5])) {
      winner = boardArr[3];
    } else if ((boardArr[6] === boardArr[7]) && (boardArr[6] === boardArr[8])) {
      winner = boardArr[6];
    } else if ((boardArr[0] === boardArr[3]) && (boardArr[0] === boardArr[6])) {
      winner = boardArr[0];
    } else if ((boardArr[1] === boardArr[4]) && (boardArr[1] === boardArr[7])) {
      winner = boardArr[1];
    } else if ((boardArr[2] === boardArr[5]) && (boardArr[2] === boardArr[8])) {
      winner = boardArr[2];
    } else if ((boardArr[0] === boardArr[4]) && (boardArr[0] === boardArr[8])) {
      winner = boardArr[0];
    } else if ((boardArr[2] === boardArr[4]) && (boardArr[2] === boardArr[6])) {
      winner = boardArr[2];
    }
  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
