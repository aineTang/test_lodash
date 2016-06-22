'use strict';
function map_to_even(collection){
  var doubleArray = [];
  for (var i=0; i<collection.length; i++){
    doubleArray.push(collection[i]*2);
  }
  console.log(doubleArray);
  return doubleArray;
}
module.exports = map_to_even;
