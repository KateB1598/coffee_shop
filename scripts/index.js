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

console.log("#3. JavaScript homework example file");
/* #1 i #2*/
function greetByName({ firstName, lastName }) {
  return `Hi, ${firstName} ${lastName}`;
}
const userObj = {
  firstName: "Kateryna",
  lastName: "Boiko",
  age: "27",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(userObj);
console.log(userObj.fullName());
console.log(greetByName(userObj));

/* #3 */
function defUpperStr(str) {
  return (str || "DEFAULT TEXT").toUpperCase();
}
console.log(defUpperStr("My text"));
console.log(defUpperStr());

/* #4 */
function evenFn(n) {
  const arr = [];
  for (let i = 2; i <= n; i += 2) {
    arr.push(i);
  }
  return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

/* #5 */
function weekFn(n) {
  switch (true) {
    case typeof n !== "number":
    case !Number.isInteger(n):
    case n < 1 || n > 7:
      return null;

    case n === 1:
      return "Понеділок";
    case n === 2:
      return "Вівторок";
    case n === 3:
      return "Середа";
    case n === 4:
      return "Четвер";
    case n === 5:
      return "Пʼятниця";
    case n === 6:
      return "Субота";
    case n === 7:
      return "Неділя";
    default:
      return null;
  }
}
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn("2"));
/* #6 */
function ageClassification(n) {
  return n <= 0
    ? null
    : n <= 24
    ? "Дитинство"
    : n <= 44
    ? "Молодість"
    : n <= 65
    ? "Зрілість"
    : n <= 75
    ? "Старість"
    : n <= 90
    ? "Довголіття"
    : n <= 122
    ? "Рекорд"
    : null;
}

console.log("    -1 :", ageClassification(-1));
console.log("     0 :", ageClassification(0));
console.log("     1 :", ageClassification(1));
console.log("    24 :", ageClassification(24));
console.log(" 24.01 :", ageClassification(24.01));
console.log("    44 :", ageClassification(44));
console.log(" 44.01 :", ageClassification(44.01));
console.log("    65 :", ageClassification(65));
console.log("  65.1 :", ageClassification(65.1));
console.log("    75 :", ageClassification(75));
console.log(" 75.01 :", ageClassification(75.01));
console.log("    90 :", ageClassification(90));
console.log(" 90.01 :", ageClassification(90.01));
console.log("   122 :", ageClassification(122));
console.log("122.01 :", ageClassification(122.01));
console.log("   150 :", ageClassification(150));

console.log("    -1 :", ageClassification(-1) === null);
console.log("     0 :", ageClassification(0) === null);
console.log("     1 :", ageClassification(1) === "Дитинство");
console.log("    24 :", ageClassification(24) === "Дитинство");
console.log(" 24.01 :", ageClassification(24.01) === "Молодість");
console.log("    44 :", ageClassification(44) === "Молодість");
console.log(" 44.01 :", ageClassification(44.01) === "Зрілість");
console.log("    65 :", ageClassification(65) === "Зрілість");
console.log("  65.1 :", ageClassification(65.1) === "Старість");
console.log("    75 :", ageClassification(75) === "Старість");
console.log(" 75.01 :", ageClassification(75.01) === "Довголіття");
console.log("    90 :", ageClassification(90) === "Довголіття");
console.log(" 90.01 :", ageClassification(90.01) === "Рекорд");
console.log("   122 :", ageClassification(122) === "Рекорд");
console.log("122.01 :", ageClassification(122.01) === null);
console.log("   150 :", ageClassification(150) === null);

/* #7 */
function oddFn(n) {
  const result = [];
  let i = 1;

  while (i <= n) {
    result.push(i);
    i += 2;
  }
  return result;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

/* #8 */
function mainFunc(a, b, callback) {
  return typeof callback === "function" ? callback(a, b) : false;
}
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cbPow(num, pow) {
  return Math.pow(num, pow);
}
function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, "not a func"));

/* HW 21*/
console.log("JS #4. Домашнє завдання. Принципи вищих функцій і замикань");

/* ! Завдання: Реалізація Функції з Каруванням для Послідовного Додавання Трьох Чисел */
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

curriedAdd(1)(2)(3);

const addFirst = curriedAdd(1);
const addSecond = addFirst(2);
const result = addSecond(3);
console.log("Result:", result);

/* ! Завдання: Реалізація Функції з Каруванням для Побудови Повного Доменного Імені */

function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return `${protocol}://${domainName}.${tld}`;
    };
  };
}

const protocolSetter = curriedDomain("http");
const domainNameSetter = protocolSetter("mywebsite");
const fullDomain = domainNameSetter("org");
console.log("Full Domain:", fullDomain);

/* ! Завдання: Розробка Вищої Функції для Модифікації Поведінки Іншої Функції */

function originalFunction(num) {
  return num * num;
}
function modifyFunction(originalFunc, multiplier) {
  return function (num) {
    const originalResult = originalFunc(num);
    return originalResult * multiplier;
  };
}
const modifiedFunc = modifyFunction(originalFunction, 3);
console.log("Original function output for 4:", originalFunction(4));
console.log("Modified function output for 4:", modifiedFunc(4));

/* ! Завдання: Розробка Функції Трирівневої Вкладеності в JavaScript з Конкретною Операцією */

function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3;
    }
    return deepInnerFunction;
  }
  return innerFunction;
}
const resultFunction = outerFunction(2)(3)(4);
console.log(resultFunction);

/* HW 22 */
console.log("#5. JavaScript homework example file");
/* 1 */
const counter = (function () {
  let counter = -1;
  return function (n) {
    if (n !== undefined) {
      counter = n;
    } else {
      counter++;
    }
    return counter;
  };
})();
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());

/* 2 */
const counterFactory = (function () {
  let count = 0;
  return {
    value: function (n) {
      if (n !== undefined) {
        count = n;
        return count;
      }
      return count;
    },
    increment: function () {
      count = count + 1;
      return count;
    },
    decrement: function () {
      count = count - 1;
      return count;
    },
  };
})();
console.log(counterFactory.value());
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value());
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(100));
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(200));
counterFactory.increment();
console.log(counterFactory.value());
/* 3 */
const myPrint = (a, b, res) => `${a}^${b}=${res}`;
function myPow(a, b, printFn) {
  function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    if (n % 2 === 0) {
      const half = pow(x, n / 2);
      return half * half;
    }
    return x * pow(x, n - 1);
  }
  const res = pow(a, b);
  return printFn(a, b, res);
}
console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));
console.log(myPow(2, 0, myPrint));
console.log(myPow(2, -2, myPrint));

/* 4 */
const list = [12, 23, 100, 34, 56, 9, 233];
const myMax = (arr) => {
  return Math.max.apply(null, arr);
};
console.log(myMax(list));
/* 5 */
const myMul = (a, b) => a * b;

const myDouble = myMul.bind(null, 2);
console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
const myTriple = myMul.bind(null, 3);
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));
