'use strict';

function choose_common_elements(collection_a, collection_b) {
  var commonElements = [];
  for (var i=0; i<collection_a.length; i++){
    for (var j=0; j<collection_b.length; j++){
      if (collection_a[i] == collection_b[j]){
        commonElements.push(collection_a[i]);
        break;
      }
    }
  }
  console.log(commonElements);
  return commonElements;
}

module.exports = choose_common_elements;
