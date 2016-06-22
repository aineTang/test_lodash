'use strict';

function compute_median(collection) {
  var arrLength = collection.length;
  var medianNum;
  for (var i=0; i<arrLength; i++){
    for (var j=i; j<arrLength; j++){
      if (collection[i] > collection[j]){
        var temp = collection[i];
        collection[i] = collection[j];
        collection[j] = temp;
      }
    }
  }
  
  if (arrLength % 2 == 0){
    medianNum = (collection[arrLength/2-1]+collection[arrLength/2])/2;
  }
  else{
    medianNum = collection[((arrLength+1)/2)-1];
  }
  console.log(collection);
  console.log(medianNum);
  return medianNum;
}

module.exports = compute_median;


