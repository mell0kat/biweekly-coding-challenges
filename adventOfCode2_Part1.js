const map = require('lodash/map')

const restoreIntcode = input => {
  const instructions = map(input.split(','), s => +s)

  let stop = false
  for (let i = 0; i < instructions.length && !stop; i += 4) {
    const opcode = instructions[i]
    const value1 = instructions[instructions[i + 1]]
    const value2 = instructions[instructions[i + 2]]
    const position3 = instructions[i + 3]

    switch (opcode) {
      case 99:
        stop = true
        break
      case 1:
        const sum = value1 + value2
        instructions[position3] = sum
        break
      case 2:
        const product = value1 * value2
        instructions[position3] = product
        break
    }
  }
  return instructions[0]
}

/*

TESTS

console.log(restoreIntcode('1,0,0,0,99')) // 2
console.log(restoreIntcode('2,3,0,3,99')) // 2
console.log(restoreIntcode('2,4,4,5,99,0')) // 2
console.log(restoreIntcode('1,1,1,4,99,5,6,0,99')) // 30

*/

const puzzleInput =
  '1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0'

console.log(restoreIntcode(puzzleInput)) // 3562672
