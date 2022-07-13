// TODO: Write your function in this file
function getnumber(lower, upper) {
  let number = []
  let sum = 0

  for (let i = lower; i <= upper; i++) {
    sum = i
    if (sum % 3 === 0 && sum % 5 === 0) {
      sum = 'FizzBuzz'
    } else if (sum % 3 === 0) {
      sum = 'Fizz'
    } else if (sum % 5 === 0) {
      sum = 'Buzz'
    }
    number.push(sum)
  }
  return number
}

getnumber(5, 15)

// TODO: Change undefined below to the name of your function
module.exports = getnumber
