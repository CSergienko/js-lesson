import test from "ava";
import fizzbuzz from "./fizzbuzz";
import fizzbuzzAnswer from "./fizzbuzz-answer";

[15, 20, 33, 100, 69].forEach((max) => {
  test(`works out fizzbuzz for numbers from 1 to ${max}`, (t) => {
    t.is(fizzbuzz(max), fizzbuzzAnswer(max));
  });
});
