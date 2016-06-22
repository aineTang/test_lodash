'use strict';
var _ = require('lodash');
function choose_common_elements(collection_a, collection_b) {
  return _.intersection(collection_a, collection_b);
}

module.exports = choose_common_elements;
