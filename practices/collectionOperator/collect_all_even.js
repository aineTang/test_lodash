'use strict';

function collect_all_even(collection) {
  var evenArray = [];
  for (var i=0; i<collection.length; i++){
    if (collection[i] % 2 == 0){
      evenArray.push(collection[i]);
    }
  }
  console.log(evenArray);
  return evenArray;
}

module.exports = collect_all_even;
