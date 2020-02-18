const _ = require('lodash');
class Planet {

  constructor(name, orbits) {
    this.name = name;
    this.orbits = orbits
  }

  countOrbits() {
    if (!this.orbits) {
      return 0
    } else {
      return 1 + this.orbits.countOrbits()
    }
  }
}

class PlanetarySystem {
  constructor() {
    this.planets = [];
  }
  buildSystem(input) {
    _.forEach(input, innerOuter => {
      const [inner, outer] = innerOuter.split(')')
      let innerPlanet = this.planets.filter(p => p.name === inner)[0]

      if (!innerPlanet) {
        innerPlanet = new Planet(inner)
        this.planets.push(innerPlanet)
      }

      const outerPlanet = new Planet(outer, innerPlanet);
      this.planets.push(outerPlanet)
    })
  }
  countOrbits() {
    const counts = _.map(this.planets, p => p.countOrbits())
    return _.sum(counts)
  }
}

const input = ['A)B', 'B)C', 'C)D'];


const countOrbits = (inputStr) => {
  const innerOuterItems = _.map(inputStr.trim().split('\n'), io => io.trim())
  const ps = new PlanetarySystem()
  ps.buildSystem(innerOuterItems)
  console.log(_.map(_.sortBy(ps.planets, p => p.name), p => p.name))
  return ps.countOrbits()
}

module.exports = {
  countOrbits
};