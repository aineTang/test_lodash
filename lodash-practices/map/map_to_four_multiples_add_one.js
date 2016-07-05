'use strict';
var _ = require("lodash");
var map_to_four_multiples_add_one = function(collection){
  var fourMultipleAddOneArray = _.map(collection,function (n){
    return 4*n + 1;
  });

  return fourMultipleAddOneArray;
};

module.exports = map_to_four_multiples_add_one;
