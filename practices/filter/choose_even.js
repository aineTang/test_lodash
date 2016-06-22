'use strict';

function choose_even(collection) {
    var evenArray = [];
    for (var i=0; i<collection.length; i++){
        if (collection[i] % 2 == 0){
            evenArray.push(collection[i]);
        }
    }
    console.log(evenArray);
    return evenArray;
}

module.exports = choose_even;
