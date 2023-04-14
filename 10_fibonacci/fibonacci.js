const fibonacci = function(n) {
    let x = 0;
    let y = 1;
    let z = 0;
    let nClean = parseInt(n);
    if (nClean <= 0) {
        return "OOPS";
    }
    if (nClean === 1) {
        return y;
    }
    for (let i = 1; i < nClean; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
