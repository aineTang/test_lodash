function collect_same_elements(collection_a, object_b) {
  var valueBArray = object_b.value;
  var sameEleArray = [];
  for (var i=0; i<collection_a.length; i++){
    for (var j=0; j<valueBArray.length; j++){
      if (collection_a[i].key == valueBArray[j]){
        sameEleArray.push(valueBArray[j]);
      }
    }
  }
  console.log(sameEleArray);
  return sameEleArray;
}

module.exports = collect_same_elements;
