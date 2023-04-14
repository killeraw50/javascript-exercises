const removeFromArray = function(array, ...indicesToRemove) {
    return array.filter(index => !indicesToRemove.includes(index));
};

// Do not edit below this line
module.exports = removeFromArray;
