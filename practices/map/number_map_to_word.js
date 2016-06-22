'use strict';
var number_map_to_word = function(collection){
  var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','x']
  var resArray = [];
  for (var i=0; i<collection.length; i++){
    var char = charArray[collection[i]-1];
    resArray.push(char);
  }
  console.log(resArray);
  return resArray;
};

module.exports = number_map_to_word;
