'use strict';
var _ = require('lodash');
function choose_divisible_integer(collection_a, collection_b) {
  var resultArray = _.filter(collection_a,function (itemA){
    var result = _.some(collection_b,function (itemB){
      return itemA % itemB == 0;
    });//some:只要满足一个判断条件，就返回true.
    return result;//filter:只要返回true,就返回当前元素
  });
  return resultArray;
}

module.exports = choose_divisible_integer;
