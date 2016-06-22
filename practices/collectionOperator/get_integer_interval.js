'use strict';

function get_integer_interval(number_a, number_b) {
  var evenIntervalArray = [];
  var intIntervalArray = [];
  var differ = number_a - number_b;
  if (differ > 0){
    for (var i=0; i<differ+1; i++){
      intIntervalArray.push(number_a - i);
    }
  }
  else if (differ < 0){
    for (var i=0; i<-differ+1; i++){
      intIntervalArray.push(number_a + i);
    }
  }
  else if (differ == 0){
    return evenIntervalArray.push(number_a);
  }

  for (var i=0; i<intIntervalArray.length; i++){
    if (intIntervalArray[i] % 2 == 0){
      evenIntervalArray.push(intIntervalArray[i]);
    }
  }
  return evenIntervalArray;
}

module.exports = get_integer_interval;

