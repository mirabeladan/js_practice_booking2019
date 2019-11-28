function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  function greaterOne(value) {
    return value < 1;
  }

  var filtered = nums.filter(greaterOne);
  return (filtered);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesArr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) {
      namesArr.push(names[i]);
    }
  }
  return namesArr;
}

function findVerbs(words) {
  let verbArr = [];
  if (!words) throw new Error("words is required");
for (let i =0; i<words.length; i++) {
  if (words[i].startsWith("to ") === true) {
verbArr.push(words[i]);
}
}
return verbArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integerArr = [];
for (let i=0; i<nums.length; i++) {
  if (Number.isInteger(nums[i]) === true) {
    integerArr.push(nums[i]);
  }
}
return integerArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
let result = users.map(a => a.data.city.displayName);
return result;
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareArray = [];
let result = nums.map(x => Math.sqrt(x));
for (let i=0; i< result.length; i++) {
  if (result[i] % 1 != 0) {
    squareArray.push(result[i]);
  }
  else {
    squareArray.push(result[i].toFixed(2));
  }
}
return squareArray;
 }

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
