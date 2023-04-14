const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5 / 9);
  if (celsius === 0) {
  return 0;
  }
  else {
    let celsiusD = celsius.toFixed(1);
  return parseFloat(celsiusD);
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 1.8 + 32);
  let fahrenheitD = fahrenheit.toFixed(1);
  return parseFloat(fahrenheitD);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
