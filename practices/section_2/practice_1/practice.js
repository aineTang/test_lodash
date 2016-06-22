function count_same_elements(collection) {
  var colObj = {};
  var colArray = [];

  for (var i=0; i<collection.length; i++){
    if (!colObj[collection[i]]){
      colObj[collection[i]] = 1;
    }
    else{
      colObj[collection[i]]++;
    }
  }
  console.log(colObj);
  for (var i in colObj){
    colArray.push({
      key:i,
      count:colObj[i]
    });
  }
  console.log(colArray);
  return colArray;
}

module.exports = count_same_elements;
