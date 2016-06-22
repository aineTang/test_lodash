function create_updated_collection(collection_a, object_b) {
  var cArray = [];
  getCArray(collection_a,cArray);

  function getCArray(col,cArray){
    var cObj = {};
    for (var i=0; i<col.length; i++){
      if (!cObj[col[i]]){
        cObj[col[i]] = 1;
      }
      else{
        cObj[col[i]]++;
      }
    }
    for (var i in cObj){
      cArray.push({
        key:i,
        count:cObj[i]
      });
    }
    return cArray;
  }
// ssh:kGqaxydmQc7LfUNU7ynLhmIIacVz8NjyZqfH9xhIJek
}

module.exports = create_updated_collection;
