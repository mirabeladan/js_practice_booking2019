const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
let p = nums.indexOf(n);
if (p !== -1) {
return nums[p +1];
}
if (p === -1) {
  return null
}
if (p === nums.legth - 1) {
  return null
}
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
 let count1 = 0;
   //loop through the word
    for (i = 0; i < str.length; i++) {
       //if the character in the word is equal to  the character passed in as a parameter increment count
       if (str[i] === "1") {
           count1++;
       }
  }
let count0 = 0;
for (i=0; i<str.length; i++) {
  if (str[i] === "0") {
    count0++
  }
}
  return ({
    "1": count1, 
    "0": count0 }
    ) };

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
   return Number(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
return arrs.toString().split(',').map(Number).reduce((a, b) => a + b, 0);
}
;

const arrShift = arr => {
  let temp = 0;
  if (arr.length < 2){
    return arr;
  }else{
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
  }
  return arr;
}

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
