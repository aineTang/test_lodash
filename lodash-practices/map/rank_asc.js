'use strict';
var _ = require('lodash');
var rank_asc = function(collection){
  return _.orderBy(collection,[],['desc']);
};

module.exports = rank_asc;
