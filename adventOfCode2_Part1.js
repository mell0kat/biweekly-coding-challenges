/*

at position 0:
  99 - end program
  1 - adds two positions and stores in third position
  2 - multiplies positions
  once you read an opcode, move forward 4 positions

*/

const restoreIntcode = (inputArray) => {
  
  for (let i=0; i < inputArray.length; i +=4 ) {
    const opcode = inputArray[i]
    const value1 = inputArray[inputArray[i + 1]]
    const value2 = inputArray[inputArray[i + 2]]
    const position3 = inputArray[i + 3]

    if (opcode === 99){
      return inputArray
    } else if (opcode === 1) {
      const sum = value1 + value2
      inputArray[position3] = sum
    } else if (opcode === 2) {
      const product = value1 * value2
      inputArray[position3] = product
    }
  }
}

/*

console.log(restoreIntcode([1,0,0,0,99])) // [2,0,0,0,99]
console.log(restoreIntcode([2,3,0,3,99])) // [2,3,0,6,99]
console.log(restoreIntcode([2,4,4,5,99,0])) // 2,4,4,5,99,9801 
console.log(restoreIntcode([1,1,1,4,99,5,6,0,99])) // [30,1,1,4,2,5,6,0,99 ]

*/



const input = 
[1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0]

console.log(restoreIntcode(input)[0]) // 3562672
