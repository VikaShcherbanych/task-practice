// input - 500
// output - 5

// input - -900
// output - -9

const reversNumber = (num) => {
    return (num > 0 
    ? 
    parseInt(num.toString().split('').reverse().join(''))
    : 
    parseInt('-' + num.toString().split('').reverse().join('')))
}

console.log(reversNumber(-592100000))

function getReversedNum(num) {
    let result = 0;
    let absNumber = Math.abs(num)
    while (absNumber) {
      result = result * 10 + absNumber % 10;
      absNumber = Math.floor(absNumber / 10);
    }
  
    return num > 0 ? result : -result;
  }
  
  console.log(getReversedNum(-592100));