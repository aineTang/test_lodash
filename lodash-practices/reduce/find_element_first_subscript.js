'use strict';
var _ = require('lodash');
function calculate_elements_sum(collection, element) {
  return _.findIndex(collection, function (col){
    return element == col;
  });
}

module.exports = calculate_elements_sum;

