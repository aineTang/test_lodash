'use strict';
var map_to_three_multiples = function(collections){
  var threeArray = [];
  for (var i=0; i<collections.length; i++){
    threeArray.push(collections[i]*3);
  }
  console.log(threeArray);
  return threeArray;
};

module.exports = map_to_three_multiples;
