const path = require('path')
const fs = require('fs')
const puzzleInput = fs.readFileSync(path.join(__dirname, '../adventOfCode/2017_day12/puzzleInput.txt'), 'utf8')
const {
  countPrograms
} = require('../adventOfCode/2017_day12/part1.js')

const testInput = `0 <-> 2
1 <-> 7
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5
7 <--> 1`

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
    expect(output).toBe(555)
  })
})