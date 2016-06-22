'use strict';

function collect_last_element(collection) {
  console.log("the last ele of the array collection is : "+collection[collection.length-1]);
  return collection[collection.length-1];
}

module.exports = collect_last_element;
