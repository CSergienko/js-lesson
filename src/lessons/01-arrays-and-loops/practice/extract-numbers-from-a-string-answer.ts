import sumOfNumbersAnswer from "./sum-of-numbers-answer";

function extractNumbersFromStringAnswer(input: string) {
  let result: number[] = [];
  let inputIntoArray = input.split(" ");

  for (let i = 0; i < inputIntoArray.length; i++) {
    let number = Number(inputIntoArray[i]);

    if (!isNaN(number)) {
      result.push(number);
    }
  }

  return sumOfNumbersAnswer(result);
}

export default extractNumbersFromStringAnswer;
