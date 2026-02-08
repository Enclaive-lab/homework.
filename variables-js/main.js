// 1 задача

// const number1 = "4";

// if (number1 === "4" || number1 === "6" || number1 === "8" || number1 === "10") {
//   console.log("корректные данные");
// } else {
//   console.log("некорректные данные");
// }

// // 2 задача

// const age = "16";
// const discount = "10";
// const age3 = "67";
// const age2 = "64";

// const result = age < 18 ? "скидка 10" : "скидка не действует ";
// console.log(result);

// const result1 = age2 >= 18 && age2 <= 65 ? "скидка 20" : "скидка не действует";
// console.log(result1);

// const result2 = age3 > 65 ? "скидка 30" : "скидка не действует ";
// console.log(result2);

// // доп 2 задача

// switch (age) {
//   case age < 18 ? "скидка 10" : "скидка не действует ":
//     console.log(result);
//     break;
// }
// switch (age2) {
//   case age2 >= 18 && age2 <= 65 ? "скидка 20" : "скидка не действует":
//     console.log(result1);
//     break;
// }

// switch (age3) {
//   case age3 > 65 ? "скидка 30" : "скидка не действует ":
//     console.log;
//     console.log(result2);
//     break;
// }

// // 3 задача

// const username = "admin";
// const password = "123456";

// const a = prompt("Введите данные имя пользователя");
// const b = prompt("Введите данные пароля пользователя");
// if (a === username && b === password) {
//   console.log("Доступ разрешен");
// } else {
//   console.log("Доступ запрещен");
// }

// // 4 задача

// const standard = "Стандарт";
// const express = "Экспресс";
// const premium = "Премиум";
// const weight = "25";

// let delivery = standard;

// switch (weight) {
//   case weight <= 0 ? "Некорректный вес посылки" : "Подходящий вес ":
//     console.log("text");
// }

//задача 1

const number = 8;

if (number % 2) {
  console.log(" Не Является четным числом");
} else {
  console.log(" Является четным числом");
}

//задача 2

// const age = 50;

// // const discount =  age < 18 ? 10 : age <= 65 ? 20 : 30;

// console.log(`Размер скидки ${discount}`);

const age = +prompt("Введите возраст");

let discount = 0;

switch (true) {
  case age < 18:
    discount = `Размер скидки ${10}%`;
    break;
  case age <= 65:
    discount = `Размер скидки ${20}%`;
    break;
  case age > 65:
    discount = `Размер скидки ${30}%`;
  default:
    discount = 0;
    break;
}

console.log(discount);

// задача 3

// const username = prompt("Введите имя пользователя");
// const password = +prompt("Введите пароль");

// if ((username === "admin" || username == "user") && password === 12345) {
//   alert("Доступ разрешен");
// } else {
//   alert("Доступ запрещен");
// }

// задача 4

const weight = +prompt("Введите вес посылки в кг");
const delivery = prompt("Введите тип доставки(Стандарт, экспресс, премиум");


if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
} else {
 const baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
}
let ratio ;

switch (delivery) {
  case "стандарт":
    ratio = 1;
    break;
  case "экспресс":
    ratio = 1.5;
    break;
  case "премиум":
    ratio = 2;
    break;
  default:
    alert("неверный тип доставки ");
    ratio = 0;
}

if (ratio !== 2) {
  const result = baseCost * ratio;
  alert(`Итоговая стоимость доставки: ${result}$`);
}
