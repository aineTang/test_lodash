'use strict';

function grouping_count(collection) {
  var groupedCount = {};
  if (collection && collection.length){
    collection.forEach(function (col){
      if (!groupedCount[col]){
        groupedCount[col] = 1;
      }
      else{
        groupedCount[col]++;
      }
    });
  }
  console.log(groupedCount);
  return groupedCount;
}

module.exports = grouping_count;
