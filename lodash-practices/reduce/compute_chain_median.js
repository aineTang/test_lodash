'use strict';
var _ = require('lodash');
function compute_chain_median(collection) {
  var chainArray = collection.split('->');
  var chainArrLength = chainArray.length;
  var medianNum;
  for (var i=0; i<chainArray.length; i++){
    chainArray[i] = parseInt(chainArray[i]);
  }
  //排序
  for (var i=0; i<chainArrLength; i++){
    for (var j=i; j<chainArrLength; j++){
      if (chainArray[i] > chainArray[j]){
        var temp = chainArray[i];
        chainArray[i] = chainArray[j];
        chainArray[j] = temp;
      }
    }
  }
  if (chainArrLength % 2 == 0){
    medianNum = (chainArray[chainArrLength/2-1]+chainArray[chainArrLength/2])/2;
  }
  else{
    medianNum = chainArray[((chainArrLength+1)/2)-1];
  }
  console.log(chainArray);
  console.log(medianNum);
  return medianNum;
}

module.exports = compute_chain_median;
