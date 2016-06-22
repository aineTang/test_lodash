'use strict';
var map_to_four_multiples_add_one = function(collection){
  var fourAddOneArray = [];
  for (var i=0; i<collection.length; i++){
    fourAddOneArray.push(collection[i]*4 + 1);
  }
  console.log(fourAddOneArray);
  return fourAddOneArray;
};

module.exports = map_to_four_multiples_add_one;
