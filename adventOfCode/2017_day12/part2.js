/*

1. Iterate through connections (left-hand side)
2. If program is not already included in "allPrograms":
3. Use part1 method to generate an array of all the programs as a part of that group
4. Return number of groups

*/
const _ = require('lodash');

const generateGroup = (connections, programToMatch) => {
  const toVisit = [programToMatch];
  const visited = {};
  while (_.size(toVisit)) {
    const currentProgram = toVisit.pop();
    if (visited[currentProgram]) {
      continue;
    }
    visited[currentProgram] = true;
    const connectedPrograms = connections[currentProgram];
    toVisit.push(...connectedPrograms)
  }

  return visited;
}

const countAllPrograms = (input) => {

  const connections = _.chain(input)
    .split('\n')
    .map(connection => _.split(connection, ' <-> '))
    .mapValues(v => {
      const [left, right] = v
      return _.split(right, ', ')
    })
    .value()

  let allProgramsVisited = {};
  let programCount = 0;
  _.forEach(connections, (v, k) => {
    if (!allProgramsVisited[k]) {
      const group = generateGroup(connections, k);
      programCount += 1;
      _.assign(allProgramsVisited, group);
    }
  })

  return programCount;
}


module.exports = {
  generateGroup,
  countAllPrograms
}