'use strict';
var _ = require("lodash");
function compute_average(collection) {
  return _.mean(collection);
}

module.exports = compute_average;

