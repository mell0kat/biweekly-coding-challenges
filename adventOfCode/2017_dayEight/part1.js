const _ = require('lodash');
const fs = require('fs')
const path = require('path')
const puzzleInput = fs.readFileSync(path.join(__dirname, './puzzleInput.txt'), 'utf8')

const testInput = `
b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
`

// How does c get calculated to be 20??

const processInput = (str) => {
  const commands = str.trim().split('\n')
  return commands
}

const processCondition = (condition, idx, registers) => {
  const [register, operator, num] = condition.split(' ')

  registers[register] = registers[register] || 0

  return eval(`registers[register]${operator}num`)
}

const processCommand = (str, idx, registers) => {

  const [part1, condition] = str.split(' if ')
  const [register, direction, amount] = part1.split(' ')
  console.log('process cond', processCondition(condition, idx, registers))
  return {
    register,
    operator: direction === 'inc' ? '+' : '-',
    amount,
    condition: processCondition(condition, idx, registers)
  }
}

const doTheThing = (str) => {
  const registers = {}
  const commands = processInput(str)
  _.each(commands, (c, i) => {
    const {
      register,
      operator,
      amount,
      condition
    } = processCommand(c, i, registers)

    if (!registers[register]) {
      registers[register] = 0
    }
    if (condition) {
      let toEvaluate;
      if (amount < 0 && operator == '-') {
        toEvaluate = `${registers[register]}+${Math.abs(amount)}`
      } else {
        toEvaluate = `${registers[register]}${operator}${amount}`
      }
      console.log(register, toEvaluate)
      registers[register] = eval(toEvaluate)
    }

    console.log(registers)

  })
  return _.max(_.values(registers))
}

console.log(doTheThing(puzzleInput))