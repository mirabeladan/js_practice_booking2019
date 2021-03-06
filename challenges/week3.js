function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
    return nums.map ( x => x*x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var newarray1 = [];
  for (let i = 1; i < words.length; i++) {
    newarray1.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return words[0] + newarray1.join('');
  }

function getTotalSubjects(people) {
  let subjectCount = 0;
  if (people === undefined) throw new Error("people is required");
  for (let i=0; i<people.length; i++) {
    subjectCount += people[i]["subjects"].length;
  }
  return subjectCount;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let isPresent = false;

  menu.forEach(item => {
    if (item.ingredients.some(itemIngredient => itemIngredient == ingredient)) {
      isPresent = true;
    }

  })

  return isPresent;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let commonNum = arr1.filter(function (n) {
    return arr2.indexOf(n) !== -1;
  });
  let sortedNum = commonNum.sort();
  let uniqueSet = new Set(sortedNum);
  let backToArray = [...uniqueSet];
  return backToArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
