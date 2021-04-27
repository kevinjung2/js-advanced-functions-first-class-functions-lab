// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
  return function(multiplier) {
    return fare * multiplier
  }
}

let fareDoubler = function(fare) {
  return createFareMultiplier(fare)(2)
}

let fareTripler = function(fare) {
  return createFareMultiplier(fare)(3)
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers)
}
