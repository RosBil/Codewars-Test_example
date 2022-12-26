// =====================
// function that returns an array of numbers that contain the digit passed as an argument
//======================

const arrOfNumbers = [15, 22, 34, 55, 125, 64, 73, 84, 46, 32]

function arrWithNumber(arr, num) {
  let newArr = []
  newArr = arr.map(el => {

    if(typeof el === 'number') { 
      return el.toString()
    }
    else {return ''}
  })

  newArr.filter(el => el.includes(num))

  return newArr.filter(el => el.includes(num)).map(el => +el)
}

const test = [123, 4, 5, 'test', 0, -123, null, undefined, ' ', '', NaN]

console.log(arrWithNumber(test, 2));


