import hello from "./hello";
import test from "ava";

test("Says hello!", (t) => {
  t.is(hello("World"), "Hello, World!");
});
