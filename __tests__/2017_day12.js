const path = require('path')
const fs = require('fs')
const puzzleInput = fs.readFileSync(path.join(__dirname, '../adventOfCode/2017_day12/puzzleInput.txt'), 'utf8')
const {
  countPrograms
} = require('../adventOfCode/2017_day12/part1.js')
const {
  generateGroup,
  countAllPrograms,
} = require('../adventOfCode/2017_day12/part2.js')

const testInput = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

describe('countPrograms', () => {
  test.skip('returns a number', () => {
    const output = countPrograms(testInput, '0')
    expect(output).toBe('number');
  })
  test('returns connections', () => {
    const output = countPrograms(testInput, '0')
    expect(output).toBe(6);
  })
  test('works for large input', () => {
    const output = countPrograms(puzzleInput, '0')
    expect(output).toBe(169)
  })
})

// Part 2

describe('generateGroup', () => {
  const testConnections = {
    0: ['2'],
    1: ['1'],
    2: ['0']
  }
  const output = generateGroup(testConnections, '0')
  test.skip('returns an array of programs', () => {
    expect(Array.isArray(output)).toBeTruthy()
  })
  test('returns all programs in group', () => {
    expect(output).toEqual({
      0: true,
      2: true
    })
  })
})

describe('countAllPrograms', () => {
  const output = countAllPrograms(testInput)
  test('should return a count', () => {
    expect(output).toBeTruthy()
  })
  test('should return a number', () => {
    expect(output).toBe(2)
  })
  const output2 = countAllPrograms(puzzleInput)
  test('should return a count', () => {
    expect(output2).toBeTruthy()
  })
  test('should return a number', () => {
    expect(output2).toBe(179)
  })
})