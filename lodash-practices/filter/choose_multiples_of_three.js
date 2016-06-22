'use strict';
var _ = require('lodash');

function choose_multiples_of_three(collection) {
  var multipleOfThree = _.filter(collection,function (item){
    return item % 3 == 0
  });
  console.log(multipleOfThree);
  return multipleOfThree;
}

module.exports = choose_multiples_of_three;
