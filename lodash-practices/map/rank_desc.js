'use strict';
var _ = require('lodash');
var rank_desc = function(collection){
  return _.orderBy(collection,[],['asc']);
};

module.exports = rank_desc;
