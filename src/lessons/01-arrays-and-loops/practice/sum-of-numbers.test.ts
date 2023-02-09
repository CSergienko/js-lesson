import sumOfNumbers from "./sum-of-numbers";
import sumOfNumbersAnswer from "./sum-of-numbers-answer";
import test from "ava";

const headMathWontSaveYou = Array(Math.floor(Math.random() * 10) + 10).fill(
  Math.floor(Math.random() * 100) * Math.round(Math.random() * 100) * Math.PI +
    1
);

[
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [10, 0.1, 3, -37, 6 ** 6],
  [-1, 2, -69, 1337],
  headMathWontSaveYou,
].forEach((numbers) => {
  test(`sumOfNumbers calculates [${numbers.join(", ")}] as ${sumOfNumbersAnswer(
    numbers
  )}`, (t) => {
    t.is(sumOfNumbers(numbers), sumOfNumbersAnswer(numbers));
  });
});
