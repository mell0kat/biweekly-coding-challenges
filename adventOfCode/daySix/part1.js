const map = require('lodash/map')
const sumBy = require('lodash/sumBy')

const getOrbitEntities = (outerInner) => outerInner.split(')')

const countOrbitsForPlanetarySystem = (planetarySystem) => {

  const orbits = planetarySystem.trim().split('\n').map(o => o.trim())

  return sumBy(orbits, o => {
    const [inner, outer] = getOrbitEntities(o)
    return countDirectAndIndirectOrbitsForEntity(outer, orbits)
  })
}

const memo = {

}

const countDirectAndIndirectOrbitsForEntity = (entity, planetarySystem) => {
  return planetarySystem.reduce((orbitCount, o) => {
    const [inner, outer] = getOrbitEntities(o)

    if (outer === entity) {
      memo[inner] = memo[inner] || countDirectAndIndirectOrbitsForEntity(inner, planetarySystem)
      return orbitCount + 1 + memo[inner]
    } else {
      return orbitCount
    }
  }, 0)
}

module.exports = {
  countOrbitsForPlanetarySystem,
  countDirectAndIndirectOrbitsForEntity
}