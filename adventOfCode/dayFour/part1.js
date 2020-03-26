const _ = require('lodash')

const checkForDouble = (str) => {
  const config = str.split('').reduce((acc, currVal) => {
    if (acc.double) {
      return acc
    }
    if (!acc.prevVal) {
      return {
        prevVal: currVal,
        double: acc === currVal
      }
    }
    return {
      prevVal: currVal,
      double: acc.prevVal === currVal
    }
  })
  return config.double
}

const checkForNotDecreasing = (str) => {
  const config = str.split('').reduce((acc, currVal) => {
    if (acc.notDecreasing === false) {
      return acc
    }

    if (!acc.prevVal) {
      return {
        prevVal: currVal,
        notDecreasing: +acc <= +currVal
      }
    }
    return {
      prevVal: currVal,
      notDecreasing: +acc.prevVal <= +currVal
    }
  })
  return config.notDecreasing
}
// check for 2 of something -- Count
// if it's monotonic, then count of two means they are in a row

const passwordChecker = (password) => {

  if (password.length !== 6) {
    return false
  }
  return checkForDouble(password) && checkForNotDecreasing(password)
}

console.log(_.countBy(_.range(153517, 630396), (p) => passwordChecker(p.toString())))

module.exports = {
  passwordChecker
}