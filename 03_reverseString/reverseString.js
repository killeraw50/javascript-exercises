const reverseString = function(word) {
    let length = word.length;
    let position = length - 1;
    let reverseWord = "";
    for (i = position; i >= 0; i--) {
    let letter = word[position];
    reverseWord += letter;
    position--;
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
