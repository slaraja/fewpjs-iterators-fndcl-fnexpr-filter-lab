//example:
// let even = arr.filter(n => {
//     return n % 2 === 0;
//   });
//   // even = [2,4,6] 
  


//This function takes an array of drivers and a string as arguments
//and returns the matching list of drivers. 
//The function should be case insensitive.

function findMatching(drivers, str) {
    return drivers.filter (driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter (driver => driver.slice(0, str.length) === str)
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
  }