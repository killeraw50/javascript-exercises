const sumAll = function(first, second) {
    let sum = 0;
    if (first < 0 || second < 0 || typeof first !== "number" || typeof second !== "number") {
        return "ERROR";
        }
    else {
        for (let i = Math.min(first, second); i <= Math.max(first, second); i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
