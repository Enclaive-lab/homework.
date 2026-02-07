// 1 задача

const number1 = "4";

if (number1 === "4" || number1 === "6" || number1 === "8" || number1 === "10") {
  console.log("корректные данные");
} else {
  console.log("некорректные данные");
}

// 2 задача

const age = "16";
const discount = "10";
const age3 = "67";
const age2 = "64";

const result = age < 18 ? "скидка 10" : "скидка не действует ";
console.log(result);

const result1 = age2 >= 18 && age2 <= 65 ? "скидка 20" : "скидка не действует";
console.log(result1);

const result2 = age3 > 65 ? "скидка 30" : "скидка не действует ";
console.log(result2);

// доп 2 задача

switch (age) {
  case age < 18 ? "скидка 10" : "скидка не действует ":
    console.log(result);
    break;
}
switch (age2) {
  case age2 >= 18 && age2 <= 65 ? "скидка 20" : "скидка не действует":
    console.log(result1);
    break;
}

switch (age3) {
  case age3 > 65 ? "скидка 30" : "скидка не действует ":
    console.log;
    console.log(result2);
    break;
}

// 3 задача

const username = "admin";
const password = "123456";

const a = prompt("Введите данные имя пользователя");
const b = prompt("Введите данные пароля пользователя");
if (a === username && b === password) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// 4 задача

const standard = "Стандарт";
const express = "Экспресс";
const premium = "Премиум";
const weight = "25";

let delivery = standard;

switch (weight) {
  case weight <= 0 ? "Некорректный вес посылки" : "Подходящий вес ":
    console.log("text");
}
