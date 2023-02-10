function sumOfNumbers(numbers: number[]) {
  // Using a for loop, calculate the sum of all of
  // the numbers provided in the "numbers" argument
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    let numberInQuestion = numbers[index];
    result = result + numberInQuestion;
  }

  // This function must return a single number!
  return result;

}

export default sumOfNumbers;
