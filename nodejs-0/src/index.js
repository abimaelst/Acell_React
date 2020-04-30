'use strict'

const fibonacci = () => {
    
    let numPrevious = 0
    let numLast = 1
    let numSum = 0
    const seq = [0, 1]
    const limit = 350

    while (numSum < limit) {
   
        numSum = (numPrevious)  + (numLast)
        numPrevious = numLast

        seq.push(numSum)

        numLast = numSum
    }

    return seq
}    
  
  const isFibonnaci = (num) => {
    let left = 0
    let right = fibonacci().length - 1
    let middlePosition = Math.trunc((left + right) / 2)
    const array = fibonacci()

    while(array.length > middlePosition) {
        
        let middleElement = array[middlePosition]

        if (middleElement === num) {
            return true
        }

        if (num < middleElement) {
            right = middlePosition - 1
        }

        if (num > middlePosition) {
            left = middlePosition + 1
        }

        if (left > right || num === 4) {
            return false
        }

        middlePosition = Math.trunc((left + right) / 2)

    }

  return false
  }
  
  module.exports = {
    fibonacci,
    isFibonnaci
  }


