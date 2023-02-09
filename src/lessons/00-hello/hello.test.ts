import hello from ".";
import test from "ava";

test("Says hello!", (t) => {
  t.is(hello("World"), "Hello, World!");
});
