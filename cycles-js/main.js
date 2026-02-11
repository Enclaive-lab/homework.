// const getFactorial = (num) => {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };

// console.log(getFactorial(3));
// console.log(getFactorial(2));
// console.log(getFactorial(6));

// const factorial = getFactorial(5);
// const isOdd = (num) => {
//   return num % 2 !== 0;
// };

// задача 1
function calculateFinalPrice(Price, discount, tax) {
  const priceAfterDiscount = Price - (Price * discount) / 100;
  const finalPrice = priceAfterDiscount + priceAfterDiscount * tax;
  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// задача 2

function checkAccess(username, password) {
  if (username === "admin" && password === "123456") {
    return "Доступ разрешен";
  }
  return "Доступ запрещен";
}

console.log(checkAccess("admin", "123456"));

// Задача 3

function getTimeOfDay(hour) {
  if (hour >= 0 && hour <= 5) return "Ночь";
  if (hour >= 6 && hour <= 11) return "Утро";
  if (hour >= 12 && hour <= 17) return "День";
  if (hour >= 18 && hour <= 23) return "Вечер";
  return "некорректное время";
}
console.log(getTimeOfDay(10));

// задача 4

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Четных чисел нет ";
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
