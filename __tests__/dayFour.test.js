const path = require('path')
const fs = require('fs')
const {
  passwordChecker,
} = require('../adventOfCode/dayFour/Part1.js')

// // Day Four - Part One Tests 

describe('passwordChecker', () => {
  test('should return false if it is no six digits long', () => {
    expect(passwordChecker('111')).toEqual(false)
  });
  test('should return false if there is no double digit', () => {
    expect(passwordChecker('123456')).toEqual(false)
    expect(passwordChecker('122456')).toEqual(true)
  });
  test('should return false if digits decrease', () => {
    expect(passwordChecker('223450')).toEqual(false)
    expect(passwordChecker('223456')).toEqual(true)
  });
})