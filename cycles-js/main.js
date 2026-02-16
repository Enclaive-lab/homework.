// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

// задача 1

function check(a, x) {
  return a.includes(x);
}

// задача 2

// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// задача 3

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

// задача 4

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// задача 5

// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// // If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
}

// задача 6

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
  return 0;
}

// задача 7

// If you can't sleep, just count sheeps!!

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// задача 8

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// // 0 <= y <= 4

function points(games) {
  let totalPoint = 0;

  for (i = 0; i < games.length; i++) {
    let scores = games[i].split(":");
    let x = Number(scores[0]);
    let y = Number(scores[1]);
    if (x > y) {
      totalPoint += 3;
    } else if (x === y) {
      totalPoint += 1;
    }
    if (x < y) {
      totalPoint += 0;
    }
  }
  return totalPoint;
}

// задача 9

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}

// задача 10

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split("!").join("");
  return "";
}
