const fs = require('fs')
const path = require('path')
const sumBy = require('lodash/sumBy')
const filter = require('lodash/filter')

const countOrbitsForEntity = (orbits, entity) => {
  const filteredOrbits = filter(orbits, orbitObject => {
    const [inner, outer] = orbitObject.split(')')
    return inner === entity
  })
  if (!filteredOrbits.length) {
    return 0
  } else {
    return
  }
}

const countOrbitsForPlanetarySystem = (planetarySystem) => {
  const orbits = planetarySystem.trim().split('\n')
  return sumBy(orbits, orbitObject => {
    const [inner, outer] = orbitObject.split(')')
    return 1 + countOrbitsForEntity(orbits, inner)
  })
}

const test = `
COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
`
console.log(countOrbitsForPlanetarySystem(test))
const puzzleInput = fs.readFileSync(path.resolve(__dirname, 'puzzleInput.txt'), 'utf8')