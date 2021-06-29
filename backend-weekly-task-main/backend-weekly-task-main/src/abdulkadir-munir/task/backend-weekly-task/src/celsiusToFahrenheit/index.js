//This function takes in one number type as its parameter
//The function converts convert from Celsius to Fahrenheit.
//The formular to convert to fahrenheit is "temperature in Celsius times 9 / 5, plus 32".

function convertToFahrenheit(celsius){
    return  (celsius * (9/5) + 32)
}
alert (convertToFahrenheit(-30))
alert (convertToFahrenheit(-10))


// convertToFahrenheit(-30) // -> -22
// convertToFahrenheit(-10) // -> 14


// function convertToFahrenheit(celsius){
//     return Math.round((celsius * (9/5) + 32) ) ;
// }
// console.log (convertToFahrenheit(32) + `F`)
// console.log(convertToFahrenheit(-10))
