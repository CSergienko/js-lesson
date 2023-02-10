function fizzbuzzAnswer(max: number) {
  let i;
  let result = "";

  for (i = 1; i <= max; i++) {
    // number divisible by 3 and 5 will
    // always be divisible by 15, print
    // 'FizzBuzz' in place of the number
    if (i % 15 == 0) {
      result += "FizzBuzz ";
    }

    // number divisible by 3? print 'Fizz'
    // in place of the number
    else if (i % 3 == 0) {
      result += "Fizz ";
    }

    // number divisible by 5, print 'Buzz'
    // in place of the number
    else if (i % 5 == 0) {
      result += "Buzz ";

      // print the whole number
    } else {
      result += `${i} `;
    }
  }

  return result.trim();
}

export default fizzbuzzAnswer;
