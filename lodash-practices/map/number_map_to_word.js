'use strict';
var _ = require('lodash');
var number_map_to_word = function(collection){
  var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','x']
  var resultArray = _.map(collection,function (c){
    return charArray[c-1];
  });
  return resultArray;
};

module.exports = number_map_to_word;
