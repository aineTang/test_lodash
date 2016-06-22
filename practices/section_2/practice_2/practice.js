function count_same_elements(collection) {
  var colObj = {};
  var countSameArray = [];

  //先把所有的元素个数提取出来
  for (var i=0; i<collection.length; i++){
    if (collection[i].indexOf('-') == -1){
      if (!colObj[collection[i]]){
        colObj[collection[i]] = 1;
      }
      else{
        colObj[collection[i]]++;
      }
    }
    else{
      var splitArray = collection[i].split('-');
      colObj[splitArray[0]] = parseInt(splitArray[1]);
    }
  }
  console.log(colObj);

  for (var i in colObj){
    countSameArray.push({
      key:i,
      count:colObj[i]
    });
  }
  console.log(countSameArray);
  return countSameArray;
}

module.exports = count_same_elements;
