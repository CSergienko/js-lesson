function lessonArraysAndLoops() {
  // Arrays
  // An array is like box.
  // It can contain a "collection" of things, of different types and sizes.
  const fruit = ["apple", "orange", "pear", "pineapple"];

  // We can access things in the array "by index" - starting from 0:
  console.log(fruit[0]); // get the item in the 0th index

  // Arrays can contain different things, including other arrays!
  const jumbleOfStuff = [1, "Polly", ["Chris", "is", "sexy"]];

  // I want to brag about all of my fruit.
  console.log(
    `I have an ${fruit[0]} and ${fruit[1]} and ${fruit[2]} and ${fruit[3]}`
  );

  // Let's use a loop.
  // Arrays ALWAYS HAVE A LENGTH - fruit.length = 4
  // Arrays ALWAYS START COUNTING AT 0
  console.log("I have " + fruit.length + " fruit");

  let brag = "I have";
  for (let index = 0; index < fruit.length; index++) {
    // console.log("Loop count: ", index);
    // console.log(fruit[index]);
    // First loop. index = 0, fruit[index] => "apple"
    // Second loop. index = 1, fruit[index] => "orange"
    // Third loop. index = 2, fruit[index] => "pear"
    // Last loop. index = 3, fruit[index] => "pineapple"
    // Bad loop. index = 4, fruit[index] => wtf?
    let theFruitInQuestion = fruit[index];
    const vowels = "aeiou";
    let firstCharacter = theFruitInQuestion.charAt(0);
    let determiner = "a";

    // its a vowel!
    if (vowels.includes(firstCharacter)) {
      determiner = "an";
    }

    brag = `${brag} ${determiner} ${theFruitInQuestion}`;
  }

  console.log(brag);
}

export default lessonArraysAndLoops;
