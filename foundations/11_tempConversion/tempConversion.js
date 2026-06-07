const convertToCelsius = function(fahrenheit) {

  const convertFarenheit =  (fahrenheit - 32) * 5/9;

  const rounded = convertFarenheit.toFixed(1);
  
  return parseFloat(rounded);
};

const convertToFahrenheit = function(celsius) {

  const convertCelsius = celsius * 9/5 + 32;

  const rounded = convertCelsius.toFixed(1);

  return parseFloat(rounded);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
