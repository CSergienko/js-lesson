import test from "ava";
import extractNumbersFromString from "./extract-numbers-from-a-string";
import extractNumbersFromStringAnswer from "./extract-numbers-from-a-string-answer";

[
  "There are 10 kinds of people in the world: those who understand binary, and those who don't.",
  "99 little bugs in the code, 99 little bugs! Take 1 down, patch it around! 127 little bugs in the code...",
  "Step 1 - write code. Step 2 - extract numbers. Step 3 - profit!",
].forEach((input) => {
  test(`${input} === ${extractNumbersFromStringAnswer(input)}`, (t) => {
    t.is(
      extractNumbersFromString(input),
      extractNumbersFromStringAnswer(input)
    );
  });
});
