function hello(name: string) {
  let firstLetter = name[0].toUpperCase();
  let restOfLetters = name.substring(1, name.length);

  return `Hello, ${firstLetter}${restOfLetters}!`;
}

export default hello;
