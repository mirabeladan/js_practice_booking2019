function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." +lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let priceVAT = originalPrice + originalPrice * (vatRate / 100);
  return Number(priceVAT.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction != 0) { 
    let newPrice = originalPrice - (originalPrice * (reduction / 100));
    return Number(newPrice.toFixed(2)) }
  else {
    return originalPrice;
  }
}

function getMiddleCharacter(str) {

  if(str.length % 2 === 0){
    return str[(str.length / 2) - 1] + str[str.length / 2];
    } else {
    return str[Math.floor(str.length / 2)];
  }
}
  

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let convertString = words.toString();
  let splitString = convertString.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  let joinArray2 = joinArray.split(",");
  let reverseArray2 = joinArray2.reverse();
  return reverseArray2;
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
let count = 0;
for (let i = 0; i<users.length; i++) {
  if (users[i]["type"] === "Linux") {
    count +=1;
  }
}
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
    let totalSum = 0;
    for (let i in scores) {
      totalSum += scores[i];
    }
    let scoreCount = scores.length;
    let average = totalSum / scoreCount;
    return Number(average.toFixed(2))
  }

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 != 0) {
    return "fizz";
  }
  else if (n % 5 === 0 && n % 3 != 0) {
    return "buzz";
  }
  else if (n % 3 != 0 && n % 5 != 0) {
    return n;
  }
  else if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
