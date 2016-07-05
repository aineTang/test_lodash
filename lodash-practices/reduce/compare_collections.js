'use strict';
var _ = require('lodash');
function compare_collections(collection_a, collection_b) {
  return _.isEqual(collection_a, collection_b);
}

module.exports = compare_collections;


