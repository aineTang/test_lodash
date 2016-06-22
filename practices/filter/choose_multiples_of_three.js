'use strict';

function choose_multiples_of_three(collection) {
  var multipleOfThree = [];
  collection.forEach(function (item){
    if (item % 3 == 0){
      multipleOfThree.push(item);
    }
  });
  console.log(multipleOfThree);
  return multipleOfThree;
}

module.exports = choose_multiples_of_three;
