function create_updated_collection(collection_a, object_b) {
  var updateArray = [];
  var valueB = object_b.value;
  for (var i=0; i<collection_a.length; i++){
    updateArray.push(collection_a[i]);
    for (var j=0; j<valueB.length; j++){
      if (collection_a[i].key == valueB[j]){
        updateArray[i].count -= 1;
        break;
      }
    }
  }
  console.log(updateArray);
  return updateArray;
}

module.exports = create_updated_collection;
