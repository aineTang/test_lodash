function count_same_elements(collection) {
  var colObj = {};
  var sameEleArray = [];
  for (var i=0; i<collection.length; i++) {
    if (collection[i].indexOf('[') != -1) {
      //含有数组的情况
      var splitFrontArray = collection[i].split('[');
      var count = splitFrontArray[1].substring(0,splitFrontArray[1].length-1)
      if (!colObj[splitFrontArray[0]]) {
        colObj[splitFrontArray[0]] = parseInt(count);
      }
      else {
        colObj[splitFrontArray[0]] += parseInt(count);
      }
    }
    else if (collection[i].indexOf('-') != -1) {
      //含有中线的情况
      countChar(colObj,collection[i],'-');
    }
    else if (collection[i].indexOf(':') != -1){
      //含有冒号的情况
      countChar(colObj,collection[i],':');
    }
    else {
      //正常情况
      if (!colObj[collection[i]]) {
        colObj[collection[i]] = 1;
      }
      else {
        colObj[collection[i]]++;
      }
    }
  }
  console.log(colObj);

  for (var i in colObj){
    sameEleArray.push({
      name:i,
      summary:colObj[i]
    });
  }

  function countChar(colObj, col, char){
    var splitArray = col.split(char);
    if (!colObj[splitArray[0]]) {
      colObj[splitArray[0]] = parseInt(splitArray[1]);
    }
    else {
      colObj[splitArray[0]] += parseInt(splitArray[1]);
    }
  }

  return sameEleArray;
}

module.exports = count_same_elements;
