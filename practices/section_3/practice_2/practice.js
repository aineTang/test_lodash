function create_updated_collection(collection_a, object_b) {
  var updateArray = [];
  var valueArray = object_b.value;
  for (var i=0; i<collection_a.length; i++){
    updateArray.push(collection_a[i]);
    for (var j=0; j<valueArray.length; j++){
      if (collection_a[i].key == valueArray[j] && updateArray[i].count >= 3){
          var remainder = Math.floor(updateArray[i].count / 3);
          updateArray[i].count -= remainder;
      }
    }
  }
  console.log(updateArray);
  return updateArray;
}

module.exports = create_updated_collection;
