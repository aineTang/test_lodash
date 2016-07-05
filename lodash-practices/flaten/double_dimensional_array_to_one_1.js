'use strict';
var _ = require('lodash');
function double_to_one(collection) {
  return _.flattenDeep(collection);
}

module.exports = double_to_one;
