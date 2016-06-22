'use strict';

function collect_max_number(collection) {
  var maxNum = collection[0];
  for (var i=1; i<collection.length; i++){
    if (collection[i] > maxNum){
      maxNum = collection[i];
    }
  }
  console.log("the max number is : "+ maxNum);
  return maxNum;
}

module.exports = collect_max_number;
