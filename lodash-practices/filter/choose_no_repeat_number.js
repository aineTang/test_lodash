'use strict';
var _ = require('lodash');
function choose_no_repeat_number(collection) {
  return _.uniq(collection);
}

module.exports = choose_no_repeat_number;
