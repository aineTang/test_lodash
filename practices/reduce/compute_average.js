'use strict';

function compute_average(collection) {
  var averageNum;
  var sum = 0;
  for (var i=0; i<collection.length; i++){
    sum += collection[i];
  }
  averageNum = sum / collection.length;
  console.log(averageNum);
  return averageNum;
}

module.exports = compute_average;

