/*

1. Initialize a count of programs (that are in the group containing 0) 
2. Visit each connection
3. See if right hand side is connected to 0
4. If so, increment count

*/
const _ = require('lodash');

const areConnected = (connections, a, b) => {
  _.some()
}

const countPrograms = (input, programToMatch) => {
  const toVisit = [programToMatch];
  const visited = {};
  const connections = _.chain(input)
    .split('\n')
    .map(connection => _.split(connection, ' <-> '))
    .mapValues(v => {
      const [left, right] = v
      return _.split(right, ', ')
    })
    .value()

  while (_.size(toVisit)) {
    const currentProgram = toVisit.pop();
    if (visited[currentProgram]) {
      continue;
    }
    visited[currentProgram] = true;
    const connectedPrograms = connections[currentProgram];
    toVisit.push(...connectedPrograms)
  }

  return _.size(_.keys(visited));
}

module.exports = {
  countPrograms
}