'use strict';
var _ = require('lodash');
function collect_max_number(collection) {
  return _.max(collection);
}

module.exports = collect_max_number;
