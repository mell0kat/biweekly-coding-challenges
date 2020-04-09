/*

Plan:
1. Translate input into object with this shape {2: [0, 3, 4]}
2. Starting with 0,
3. Use a stack & while loop to visit every connected program
4. Keep track of visited programs & return the count


Notes:
* Could have used Set instead of { visited: true } map

*/
const _ = require('lodash');

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