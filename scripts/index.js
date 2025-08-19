console.log(
  "JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних"
);
const myNum = 10;
const decimal2 = myNum.toFixed(2);
console.log(decimal2);
const myStr = "some string";
console.log(myStr);
console.log(myStr.toUpperCase());
console.log(myStr);

const myBool = true;
console.log(myBool);

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);

const myObj = { first: "First Name", last: "Last Name" };
console.log(myObj);

let myBigInt = 123n;
myBigInt = myBigInt + 1n;
console.log(myBigInt);

/* HW 19*/
console.log(
  "JS #2. Домашнє завдання. Занурення в JavaScript: Від простих до складних обчислень і рядків"
);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));

function greetByName(msg, name) {
  return msg + ", " + name;
}
console.log(greetByName("Hi", "John"));
console.log(greetByName("Hey", "Bob"));
console.log(greetByName("Hello", "Mary"));

function sumBigIntegers(numStr1, numStr2) {
  return BigInt(numStr1) + BigInt(numStr2);
}
console.log(sumBigIntegers("9007199254740991", "9007199254740991"));
