// задача

const person = {
  name: "Egor",
  age: 22,
  activity: "work",
  height: 187,
  weight: 73,
};

console.log(person);

// задача 2

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));
// задача 3

const task = {
  title: "text",
  description: "stroke",
  isCompleted: "function",
};

function cloneAndModify(object, modifications) {
  const copyrait = { ...object };

  for (const key in modifications) {
    copyrait[key] = modifications[key];
  }

  return copyrait;
}

const task2 = cloneAndModify(task, { title: "light" });

console.log(task);
console.log(task2);

// задача 4

const callAllMethods = (object) => {
  for (const key in object) {
    const value = object[key];

    if (typeof value === "function") value.call(object);
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
callAllMethods(myObject);
