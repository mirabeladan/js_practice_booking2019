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
  return nums.map(x => {
    let square = Math.sqrt(x);
    return Number(square.toFixed(2));
  });
}

 function findSentencesContaining(sentences, str) {
   if (!sentences) throw new Error("sentences is required");
   if (!str) throw new Error("str is required");
   let sentenceArr = [];
   for (let i = 0; i < sentences.length; i++) {
     if (sentences[i].toLowerCase().indexOf(str.toLowerCase()) >= 0) {
       sentenceArr.push(sentences[i]);
     }
   }
   return sentenceArr;
 }

 function getLongestSides(triangles) {
   if (!triangles) throw new Error("triangles is required");
   let longestSides = [];
   for (let i = 0; i < triangles.length; i++) {
     let maximum = Math.max.apply(Math, triangles[i]);
     longestSides.push(maximum);
   }
   return longestSides;
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
