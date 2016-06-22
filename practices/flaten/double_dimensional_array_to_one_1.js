'use strict';

function double_to_one(collection) {
  var oneArray = [];

  function getOneArray(collection,oneArray){
    for (var i=0; i<collection.length; i++){
      if (collection[i] && collection[i].length){
        getOneArray(collection[i],oneArray);
      }
      else{
        oneArray.push(collection[i]);
      }
    }
  }
  getOneArray(collection,oneArray);
  console.log(oneArray);
  return oneArray;
}

module.exports = double_to_one;
