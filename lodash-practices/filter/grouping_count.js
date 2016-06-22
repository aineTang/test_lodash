'use strict';
var _ = require('lodash');
function grouping_count(collection) {
  return _.countBy(collection);
}

module.exports = grouping_count;
