'use strict';

function collect_min_number(collection) {
  var minNum = collection[0];
  for (var i=1; i<collection.length; i++){
    if (collection[i] < minNum){
      minNum = collection[i];
    }
  }
  console.log(minNum);
  return minNum;
}

module.exports = collect_min_number;

