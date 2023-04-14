const palindromes = function (word) {
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = "";
    for (let i = cleanWord.length - 1; i >= 0; i--) {
    reverse += cleanWord[i];
    }
    if (cleanWord === reverse) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
