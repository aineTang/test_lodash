'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var notCommonElements = [];
  for (var i=0; i<collection_a.length; i++){
    var flag = 1;
    for (var j=0; j<collection_b.length; j++){
      if (collection_a[i] == collection_b[j]){
        flag = 0;
        break;
      }
    }
    if (flag){
      notCommonElements.push(collection_a[i]);
    }
  }
  console.log(notCommonElements);
  return notCommonElements;
}

module.exports = choose_no_common_elements;
