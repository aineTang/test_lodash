function collect_same_elements(collection_a, object_b) {
  var valueArray = object_b.value;
  var sameValueArray = [];
  for (var i=0; i<collection_a.length; i++){
    for (var j=0; j<valueArray.length; j++){
      if (valueArray[j] == collection_a[i]){
        sameValueArray.push(collection_a[i]);
      }
    }
  }
  console.log(sameValueArray);
  return sameValueArray;
}

module.exports = collect_same_elements;
