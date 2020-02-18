const path = require('path')
const fs = require('fs')
const {
  countLayers,
  countZerosInLayer,
  getLayers,
  checkImageForCorruption
} = require('../adventOfCode/dayEight/Part1.js')

// // Day Eight - Part One Tests 

describe('countLayers', () => {
  const imageCode = '123456789012'
  test('should return false if it is no six digits long', () => {
    expect(getLayers(imageCode, 6)).toHaveLength(2)
  });


  test('should return layer with least 0s', () => {
    expect(checkImageForCorruption('123456789012', 2, 3)).toEqual('789012')
  });
  // test('should return false if digits decrease', () => {
  //   expect(countLayers('223450')).toEqual(false)
  //   expect(countLayers('223456')).toEqual(true)
  // });
})

describe('countZerosInLayer', () => {
  test('should count zeroes', () => {
    expect(countZerosInLayer('789002')).toEqual(2)
  })
})