const path = require('path')
const fs = require('fs')
const puzzleInput = fs.readFileSync(path.join(__dirname, '../adventOfCode/dayEight/puzzleInput.txt'), 'utf8')
const {
  countLayers,
  countDigitsInLayer,
  getLayers,
  checkImageForCorruption
} = require('../adventOfCode/dayEight/Part1.js')
const {
  decodeImage,
  getPixel
} = require('../adventOfCode/dayEight/Part2.js')

// Day Eight - Part One Tests 

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
    expect(checkImageForCorruption(puzzleInput, 25, 6)).toEqual(2760)
  })
})

// Day Eight - Part Two Tests 

describe('countLayers', () => {
  const imageCode = '123456789012'
  test('should return proper pixel for layers of pixels', () => {
    expect(getPixel([2, 2, 1])).toBe(1)
    expect(getPixel([1, 2, 1])).toBe(1)
    expect(getPixel([2, 0, 1])).toBe(0)
  });
  test('should return image', () => {
    expect(decodeImage('0222112222120000', 2, 2)).toBe(`#.\n.#`)
  });
  test('should return image for puzzleInput', () => {
    const message = decodeImage(puzzleInput, 25, 6)
    fs.writeFileSync(path.join(__dirname, '../adventOfCode/dayEight/puzzleOutput.txt'), message)
    expect(message).toBe(`this is incorrect`)
  });
})