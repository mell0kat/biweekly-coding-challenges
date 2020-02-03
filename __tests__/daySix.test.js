const path = require('path')
const fs = require('fs')
const {
  countOrbitsForPlanetarySystem,
  countDirectAndIndirectOrbitsForEntity
} = require('../adventOfCode/daySix/Part1.js')


// Day Six - Part One Tests 
describe('Part One', () => {

  describe('countDirectAndIndirectOrbitsForEntity helper function', () => {

    test('should handle one direct orbit', () => {
      let input = ['A)B']
      expect(countDirectAndIndirectOrbitsForEntity('A', input)).toEqual(0)
      expect(countDirectAndIndirectOrbitsForEntity('B', input)).toEqual(1)
    })
    test('should handle indirect orbits', () => {
      let input = ['A)B', 'B)C', 'C)D']
      expect(countDirectAndIndirectOrbitsForEntity('A', input)).toEqual(0)
      expect(countDirectAndIndirectOrbitsForEntity('B', input)).toEqual(1)
      expect(countDirectAndIndirectOrbitsForEntity('C', input)).toEqual(2)
      expect(countDirectAndIndirectOrbitsForEntity('D', input)).toEqual(3)
    })
    test('should handle indirect orbits', () => {
      let input = [
        'COM)B',
        'B)C',
        'C)D',
        'D)E',
        'E)F',
        'B)G',
        'G)H',
        'D)I',
        'E)J',
        'J)K',
        'K)L'
      ]

      expect(countDirectAndIndirectOrbitsForEntity('B', input)).toEqual(1)
      expect(countDirectAndIndirectOrbitsForEntity('C', input)).toEqual(2)
      expect(countDirectAndIndirectOrbitsForEntity('L', input)).toEqual(7)
    })
  })

  describe('countOrbitsForPlanetarySystem', () => {
    test('should handle all direct orbits', () => {
      let input = `
    A)B
    A)C
    A)D`;
      expect(countOrbitsForPlanetarySystem(input)).toEqual(3)
    });

    test('should handle a mix of outer and inner', () => {
      let input = `COM)B
      B)C
      C)D
      D)E
      E)F
      B)G
      G)H
      D)I
      E)J
      J)K
      K)L`;
      expect(countOrbitsForPlanetarySystem(input)).toEqual(42)
    });
    test('should return 1 when input is 3,0,4,0,99 and 1', () => {
      const puzzleInput = fs.readFileSync(path.resolve(__dirname, '../', 'adventOfCode/daySix/puzzleInput.txt'), 'utf8')
      expect(countOrbitsForPlanetarySystem(puzzleInput)).toEqual('????') // not the correct answer: 308790
    })
  })
})