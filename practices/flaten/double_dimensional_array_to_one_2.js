'use strict';

function double_to_one(collection) {
  var dimensionalObj = {};
  var dimensionlArray = [];

  function getTwoToOne(collection){
    var k=0;
    for (var i=0; i<collection.length; i++){
      for(var j=0; j<collection[i].length; j++){
        var flag = 1;
        for (var key in dimensionalObj){
          if (dimensionalObj[key] == collection[i][j]){
            flag = 0;
            break;
          }
        }
        if (flag){
          dimensionalObj[k] = collection[i][j];
          k++;
        }
      }
    }
  }
  getTwoToOne(collection);
  console.log(dimensionalObj);
  for (var key in dimensionalObj){
    dimensionlArray.push(dimensionalObj[key]);
  }
  console.log(dimensionlArray);
  return dimensionlArray;
}


module.exports = double_to_one;
