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
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
