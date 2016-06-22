'use strict';
var rank_asc = function(collection){
  for (var i=0; i<collection.length; i++){
    for (var j=i; j<collection.length; j++){
      var temp;
      if (collection[i] < collection[j]){
        temp = collection[i];
        collection[i] = collection[j];
        collection[j] = temp;
      }
    }
  }
  console.log(collection);
  return collection;
};

module.exports = rank_asc;
