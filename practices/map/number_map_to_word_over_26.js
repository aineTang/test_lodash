'use strict';
var number_map_to_word_over_26 = function(collection){
  var charArray = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','x'];
  var mapArray = [];
  for (var i=0; i<collection.length; i++){
    var char = "";
    if (collection[i] > 25){
      for (var j=0; j<Math.floor(collection[i]/26); j++){
        char += 'a';
      }
      var remainder = collection[i] % 26;
      if (remainder != 0){
        char += charArray[remainder];
      }
    }
    else{
      char = charArray[collection[i]];
    }
    mapArray.push(char);
  }
  console.log(mapArray);
  return mapArray;
};

module.exports = number_map_to_word_over_26;
