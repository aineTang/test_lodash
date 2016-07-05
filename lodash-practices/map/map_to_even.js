'use strict';
var _ = require("lodash");
function map_to_even(collection){
  var mappedEvenArray =  _.map(collection,function (n){
    return n*2;
  });
  return mappedEvenArray;
}
module.exports = map_to_even;
