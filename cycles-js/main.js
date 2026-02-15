"use strict";
// задача 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

const lastUsers = [
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
];

users.push(...lastUsers);

console.log(users);

// задача 2

const user = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

function getUserAverageAge() {
  let sum = 0;
  for (let i = 0; i < user.length; i++) {
    sum += user[i].age;
  }
  return sum / user.length;
}
console.log(getUserAverageAge(user));

// Задача 3
const use = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

const admins = (use) => {
  const admins = [];

  for (let i = 0; i < use.length; i++) {
    if (use[i].isAdmin === true) {
      admins.push(use[i]);
    }
  }

  return admins;
};

console.log(admins(use));

// задача 4

function first(arr, n) {
  if (n === undefined) {
    return [arr[0]];
  }

  if (n === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(first([1, 2, 3, 4, 5], 3));
console.log(first([1, 2, 3, 4, 5]));
console.log(first([1, 2, 3, 4, 5], 0));
