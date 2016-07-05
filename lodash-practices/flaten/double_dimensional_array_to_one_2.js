'use strict';
var _ = require('lodash');
function double_to_one(collection) {
  var flatenedArray = _.flattenDeep(collection);
  return _.uniq(flatenedArray);
}

module.exports = double_to_one;
