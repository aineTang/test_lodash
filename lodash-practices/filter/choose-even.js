/**
 * Created by aine on 6/22/16.
 */
'use strict';
var _ = require('lodash');
function choose_even(collection) {
  var evenArray = _.filter(collection, function(n) {
    return n % 2 == 0;
  });
  console.log(evenArray);
  return evenArray;
}

module.exports = choose_even;
