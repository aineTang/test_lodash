'use strict';
var _ = require('lodash');
var map_to_three_multiples = function(collections){
  var threeArray = _.map(collections,function (n){
    return 3*n;
  });
  return threeArray;
};

module.exports = map_to_three_multiples;
