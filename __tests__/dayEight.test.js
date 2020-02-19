const path = require('path')
const fs = require('fs')
const puzzleInput = fs.readFileSync(path.join(__dirname, '../adventOfCode/dayEight/puzzleInput.txt'), 'utf8')
const {
  countLayers,
  countDigitsInLayer,
  getLayers,
  checkImageForCorruption
} = require('../adventOfCode/dayEight/Part1.js')

// // Day Eight - Part One Tests 

describe('countLayers', () => {
  const imageCode = '123456789012'
  test('should return false if it is no six digits long', () => {
    expect(getLayers(imageCode, 6)).toHaveLength(2)
  });
})

describe('countDigitsInLayer', () => {
  test('should count zeroes', () => {
    expect(countDigitsInLayer('789112', 0)).toEqual(0)
    expect(countDigitsInLayer('789012', 0)).toEqual(1)
    expect(countDigitsInLayer('789002', 0)).toEqual(2)
  })
})

describe('checkImageForCorruption', () => {
  test('should return #1s * #2s in layer with fewest zeros', () => {
    expect(checkImageForCorruption('123456789012', 2, 3)).toEqual(1)
    expect(checkImageForCorruption('222111789012', 2, 3)).toEqual(9)
  });
  test('it should give an answer for puzzle input', () => {
    expect(checkImageForCorruption(puzzleInput, 25, 6)).toEqual('thiswillfail')
  })
})